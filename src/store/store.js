// store.js
export default new Vuex.Store({
    state: {
        username: localStorage.getItem('username') || '默认用户名',
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
            localStorage.setItem('username', username);
        }
    }
});
