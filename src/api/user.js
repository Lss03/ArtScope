let userData = {
    id: null,
    name: '神秘人',
    pwd: '',
    nickname: '',
    avatar: '',
    fans: 10,
    likes: 0,
    works: 0,
    email: ''
};

export default {
    // 获取用户信息
    getUserInfo(callback) {
        setTimeout(() => callback(userData), 100);
    },

    // 更新用户信息
    updateUserInfo(newUserInfo, callback) {
        setTimeout(() => {
            userData = {...userData, ...newUserInfo};
            callback(userData);
        }, 100);
    },

    // 可以在此添加更多与用户相关的方法
};
