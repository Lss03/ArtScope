const state = {
    userInfo: {},
    token: localStorage.getItem('userToken') || null,
};

const mutations = {
    setUserInfo(state, userInfo) {
        state.userInfo = userInfo;
    },
    setToken(state, token) {
        state.token = token;
    }
};

const actions = {
    async login({ commit }, credentials) {
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('userToken', data.access_token);
                commit('setToken', data.access_token);
                await this.dispatch('userInstance/fetchUserInfo', credentials.username);
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    async fetchUserInfo({ commit }, username) {
        try {
            const response = await fetch(`http://localhost:5000/userinfo?username=${username}`);
            const data = await response.json();
            commit('setUserInfo', data);
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    },

    checkLoginStatus({ commit }) {
        const token = localStorage.getItem('userToken');
        if (token) {
            commit('setToken', token);
            // 这里可以添加代码来根据 token 获取并设置用户信息
            // 如 commit('fetchUserInfo', username);
        }
    },

    logout({ commit }) {
        localStorage.removeItem('userToken');
        commit('setToken', null);
        commit('setUserInfo', {});
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
