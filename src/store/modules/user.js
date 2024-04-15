import { loginUser, registerUser, fetchUserInfo } from '@/api/user';

export default {
    namespaced: true,
    state: {
        userDetails: JSON.parse(localStorage.getItem('userDetails') || '{}'),
        loginStatus: '',
        registerStatus: '',
        userInfo: {},
        favoritePictures: [],
    },
    mutations: {
        SET_USER_DETAILS(state, userDetails) {
            state.userDetails = userDetails;
            localStorage.setItem('userDetails', JSON.stringify(userDetails));
        },
        SET_LOGIN_STATUS(state, status) {
            state.loginStatus = status;
        },
        SET_REGISTER_STATUS(state, status) {
            state.registerStatus = status;
        },
        CLEAR_USER_STATE(state) {
            state.userDetails = {};
            localStorage.removeItem('userDetails');
        },
        SET_USER_INFO(state, userInfo) {
            state.userInfo = userInfo;
        },
        SET_USER_PICTURES(state, userPictures) {
            state.userDetails.pictures = userPictures;
        },
        SET_FAVORITE_PICTURES(state, favoritePictures) {
            state.favoritePictures = favoritePictures; // 新增mutation
        },
    },
    actions: {
        // store/modules/user.js 中的 loginUser action
        async registerUser({ dispatch, commit }, userData) {
            try {
                const response = await registerUser(userData);
                if (response.data.success) {
                    commit('SET_REGISTER_STATUS', 'success');
                    // 注册成功后，使用新注册用户的凭证自动登录
                    await dispatch('loginUser', { username: userData.username, password: userData.password });
                } else {
                    commit('SET_REGISTER_STATUS', 'failure');
                }
                return response.data; // 确保返回 API 响应数据
            } catch (error) {
                commit('SET_REGISTER_STATUS', 'error');
                throw error;
            }
        },

        async loginUser({ commit, dispatch }, credentials) {
            try {
                const response = await loginUser(credentials);
                if (response.data.success) {
                    commit('SET_LOGIN_STATUS', 'success');
                    // 成功登录后，获取并更新用户详细信息
                    await dispatch('fetchUserDetails', credentials.username);
                } else {
                    commit('SET_LOGIN_STATUS', 'failure');
                }
                return response.data; // 确保返回 API 响应数据
            } catch (error) {
                commit('SET_LOGIN_STATUS', 'error');
                throw error;
            }
        },
        async fetchUserDetails({ commit }, username) {
            try {
                // console.log(username)
                const response = await fetchUserInfo(username);
                if (response.data.success && response.data.success) {
                    commit('SET_USER_DETAILS', response.data.user);
                    commit('SET_USER_INFO', response.data.user);
                    commit('SET_USER_PICTURES', response.data.pictures);
                    commit('SET_FAVORITE_PICTURES', response.data.favoritePictures); // 更新收藏图片列表
                    console.log('图片收藏列表：'+response.data.favoritePictures);

                } else {
                    commit('CLEAR_USER_STATE');
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
                commit('CLEAR_USER_STATE');
            }
        },
        initializeSession({ commit }) {
            const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
            if (userDetails && Object.keys(userDetails).length) {
                commit('SET_USER_DETAILS', userDetails);
            }
        },
        logoutUser({ commit }) {
            commit('CLEAR_USER_STATE');
        },
    },
    getters: {
        isAuthenticated(state) {
            return !!state.userDetails && Object.keys(state.userDetails).length > 0;
        },
        userDetails(state) {
            return state.userDetails;
        },
        userPictures(state) {
            console.log(state.userDetails.pictures)
            return state.userDetails.pictures || [];
        },
        userInfo(state) {
            return state.userInfo;
        },
        favoritePictures(state) {
            return state.favoritePictures;
        },
    }
};
