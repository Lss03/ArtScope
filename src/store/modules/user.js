// store/modules/user.js
import userApi from '@/api/user'; // 确保路径正确

const state = {
    userInfo: {}
};

const mutations = {
    setUserInfo(state, userInfo) {
        state.userInfo = userInfo;
    }
};

const actions = {
    fetchUserInfo({ commit }) {
        userApi.getUserInfo(userInfo => {
            commit('setUserInfo', userInfo);
        });
    },
    updateUserInfo({ commit }, newUserInfo) {
        userApi.updateUserInfo(newUserInfo, updatedUserInfo => {
            commit('setUserInfo', updatedUserInfo);
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
