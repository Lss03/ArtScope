const comment=[
    {   'id': 1,
        user: 'liar', 
        message: '这是一个很棒的图片！', 
        timestamp: '2023-01-01 12:00',
        avatar: '@/assets/touxiang/p1.jpg',  // 用户A的头像
        likes: 10  // 评论的点赞数量
      }, 
      { 'id': 2,
        user: 'apple', 
        message: '我很喜欢这张图片的风格！', 
        timestamp: '2023-01-01 12:00',
        avatar: '@/assets/touxiang/p3.jpg',  // 用户A的头像
        likes: 10  // 评论的点赞数量
      }, 
      { 'id': 3,
        user: 'pair', 
        message: '爱了爱了家人们！', 
        timestamp: '2023-01-01 12:00',
        avatar: '@/assets/touxiang/p4.jpg',  // 用户A的头像
        likes: 10  // 评论的点赞数量
      }, 
      { 'id': 5,
      user: 'leo', 
      message: '我的最终幻想！', 
      timestamp: '2023-01-01 12:00',
      avatar: '@/assets/touxiang/p5.jpg',  // 用户A的头像
      likes: 10  // 评论的点赞数量
    }, 
      { 'id': 6,
      user: 'agru', 
      message: '现在是做梦时间！', 
      timestamp: '2023-01-01 12:00',
      avatar: '@/assets/touxiang/p6.jpg',  // 用户A的头像
      likes: 10  // 评论的点赞数量
    }, 
    { 'id': 7,
    user: 'sma gog', 
    message: '笑死我了', 
    timestamp: '2024-01-01 12:00',
    avatar: '@/assets/touxiang/p7.jpg',  // 用户A的头像
    likes: 10  // 评论的点赞数量
  }, 
    { 'id': 8,
    user: '张三', 
    message: '我怎么插不了眼', 
    timestamp: '2024-01-01 12:00',
    avatar: '@/assets/touxiang/p8.jpg',  // 用户A的头像
    likes: 10  // 评论的点赞数量
  }, 
  { 'id': 9,
  user: '李四', 
  message: '没看懂', 
  timestamp: '2024-01-01 12:00',
  avatar: '@/assets/touxiang/p9.jpg',  // 用户A的头像
  likes: 10  // 评论的点赞数量
  }, 
  { 'id': 10,
  user: 'hoddy', 
  message: 'woc太帅了！', 
  timestamp: '2024-01-01 12:00',
  avatar: '@/assets/touxiang/p10.jpg',  // 用户A的头像
  likes: 10  // 评论的点赞数量
  }, 
  { 'id':11,
  user: 'panan', 
  message: '太好看了！', 
  timestamp: '2024-01-01 12:00',
  avatar: '@/assets/touxiang/p11.jpg',  // 用户A的头像
  likes: 10  // 评论的点赞数量
  }, 
  { 'id': 12,
  user: 'yiyi', 
  message: '这是一个很棒的样式！', 
  timestamp: '2024-01-01 12:00',
  avatar: '@/assets/touxiang/p12.jpg',  // 用户A的头像
  likes: 10  // 评论的点赞数量
  }
]
export default {
  getCommentsList (callback) {
    setTimeout(() => callback(comment), 100)
  }
}