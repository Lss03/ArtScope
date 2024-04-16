import { loginUser, registerUser, fetchUserInfo,updateUserInfo } from '@/api/user';

export default {
    namespaced: true,
    state: {
        isLoggedIn: false,
        userDetails: JSON.parse(localStorage.getItem('userDetails') || '{}'),
        loginStatus: '',
        registerStatus: '',
        userInfo: {},
        favoritePictures: [],
    },
    mutations: {
        SET_IS_LOGGED_IN(state, status) {
            state.isLoggedIn = status;
        },
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
        SET_USER_AVATAR(state, url) {
            state.userDetails.avatarUrl = url;
        },
    },
    actions: {
        async updateUserInfo({commit} , formData) {
            try {
                console.log("上传头像"+formData);
                const response = await updateUserInfo(formData);
                console.log("上传response:"+response.data);
                // 成功更新头像后的处理逻辑
                if (response.data.success) {
                    // 可能需要根据您的应用需求来更新状态或通知用户
                    console.log("新头像："+response.data.userEntity.avatarUrl);
                    commit('SET_USER_AVATAR', response.data.userEntity.avatarUrl); // 假设响应中有新头像的 URL
                } else {
                    // 错误处理
                    console.error(response.data.message);
                }
            } catch (error) {
                // 错误响应处理
                console.error('更新头像时出错:', error);
            }
        },
        // store/modules/user.js 中的 loginUser action
        async registerUser({ dispatch, commit }, userData) {
            try {
                console.log("注册用户数据："+userData);
                const response = await registerUser(userData);
                if (response.data.success) {
                    commit('SET_REGISTER_STATUS', 'success');
                    commit('SET_IS_LOGGED_IN',true );
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
                    commit('SET_IS_LOGGED_IN',true );
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
