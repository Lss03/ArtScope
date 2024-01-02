let userData = {
    id: null,
    name: '神秘人',
    pwd: '',
    nickname: '',
    avatar: '',
    fans: 10,
    likes: 0,
    works: 0,
    email: '',
    images:[]
};

export default {
    // 获取用户信息
// 更新用户信息
    addImage(imageData, callback) {
        setTimeout(() => {
          userData.images.push(imageData); // Push the new image data to the array
          callback(userData);
        }, 100);
      },

    // 可以在此添加更多与用户相关的方法
};
