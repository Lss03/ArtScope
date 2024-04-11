// store/modules/photos.js
// import content from '@/api/content'; // 假设 api 文件名为 photo.js

const state = {
  comment:[{   
    id: '',
    user: '', 
    message: '', 
    timestamp: '',
    avatar: '',  // 用户A的头像
    likes: '' // 评论的点赞数量
  }],
   comments:[
    {   id: 1,
    user: 'liar', 
    message: '这是一个很棒的图片！', 
    timestamp: '2023-01-01 12:00',
    avatar: require('@/assets/touxiang/p1.jpg'),  // 用户A的头像
    likes: 10  // 评论的点赞数量
  }, 
  { id: 2,
    user: 'apple', 
    message: '我很喜欢这张图片的风格！', 
    timestamp: '2023-01-01 12:00',
    avatar: require('@/assets/touxiang/p2.jpg'),  // 用户A的头像
    likes: 10  // 评论的点赞数量
  }, 
  { id: 3,
    user: 'pair', 
    message: '爱了爱了家人们！', 
    timestamp: '2023-01-01 12:00',
    avatar: require('@/assets/touxiang/p3.jpg'),  // 用户A的头像
    likes: 10  // 评论的点赞数量
  }, 
  { id: 5,
  user: 'leo', 
  message: '我的最终幻想！', 
  timestamp: '2023-01-01 12:00',
  avatar: require('@/assets/touxiang/p4.jpg'),  // 用户A的头像
  likes: 10  // 评论的点赞数量
}, 
  { id: 6,
  user: 'agru', 
  message: '现在是做梦时间！', 
  timestamp: '2023-01-01 12:00',
  avatar: require('@/assets/touxiang/p5.jpg'),  // 用户A的头像
  likes: 10  // 评论的点赞数量
}, 
{ id: 7,
user: 'sma gog', 
message: '笑死我了', 
timestamp: '2024-01-01 12:00',
avatar: require('@/assets/touxiang/p6.jpg'),  // 用户A的头像
likes: 10  // 评论的点赞数量
}, 
{ id: 8,
user: '张三', 
message: '我怎么插不了眼', 
timestamp: '2024-01-01 12:00',
avatar: require('@/assets/touxiang/p7.jpg'),  // 用户A的头像
likes: 10  // 评论的点赞数量
}, 
{ id: 9,
user: '李四', 
message: '没看懂', 
timestamp: '2024-01-01 12:00',
avatar: require('@/assets/touxiang/p8.jpg'),  // 用户A的头像
likes: 10  // 评论的点赞数量
}, 
{ id: 10,
user: 'hoddy', 
message: 'woc太帅了！', 
timestamp: '2024-01-01 12:00',
avatar: require('@/assets/touxiang/p9.jpg'),  // 用户A的头像
likes: 10  // 评论的点赞数量
}, 
{ id:11,
user: 'panan', 
message: '太好看了！', 
timestamp: '2024-01-01 12:00',
avatar: require('@/assets/touxiang/p10.jpg'),  // 用户A的头像
likes: 10  // 评论的点赞数量
}, 
{ id: 12,
user: 'yiyi', 
message: '这是一个很棒的样式！', 
timestamp: '2024-01-01 12:00',
avatar: require('@/assets/touxiang/p11.jpg'),  // 用户A的头像
likes: 10  // 评论的点赞数量
}
]
};

const actions = {
    getList({ commit },id) {
          commit('setList', id);
    },
    putList({ commit }, payload) {
      const id = payload.id;
      const data = payload.data;
      commit('putText', { id: id, data: data });
    },
    
};

const mutations = {
    setList(state, data) {
        state.comment = state.comments.filter(comment => comment.id === data);
    },
    putText(state,{ id, data }) {
      state.comment=state.comments.filter(comment => comment.id === id);
      const text={
        id:state.comment[0].id,
        user: state.comment[0].user, 
        message:'', 
        timestamp: new Date().toISOString(),
        avatar: state.comment[0].avatar,
        likes: state.comment[0].likes  // 评论的点赞数量
        } 
        text.message=data
        state.comments.push(text)
  },    

};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
