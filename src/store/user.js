//当前用户信息对象 账号 密码 昵称 头像 点赞数 粉丝数 作品 用户id  用户的邮箱
const userInstance = {
    state: {
        userInfo: {
            id: null,
            name: '神秘人',
            pwd: '',
            nickname: '',
            avatar: '',
            fans: 10,
            likes: 0,
            works: 0,
            email: ''
        }
    },
    mutations: {
        //修改用户信息
        setUserInfo(state, newUserInfo) {
            state.userInfo = newUserInfo;
        }
    },
    actions: {

    }
}
export default userInstance;

