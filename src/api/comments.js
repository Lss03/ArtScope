
// jsonCopy code{
//     "userEntity": { /* 创建图片的用户实体 */ },
//     "pictureEntity": { /* 图片实体 :图片的相关信息*/ },
//     "commentEntityList": [ /* 评论列表 ：评论实体*/ ],
//         "success": true,
//         "message": "获取图片详情成功"
// }
/*
let comments =
{
    "userEntity": {
    "id": 3,
        "accountName": "xg",
        "nickname": null,
        "password": "gxg",
        "avatarUrl": null,
        "likesCount": 0,
        "followersCount": 0,
        "followering":0,
        "registrationTime": "2024-04-09T12:40:19.250052Z"
},
    "pictureEntity": {
    "imageId": 5,
        "likesCount": 0,
        "url": "https://mydemo2.obs.cn-north-4.myhuaweicloud.com/picture/14ec4c00-fa8b-441a-a825-24215654ec70.jpeg",
        "category": "cat",
        "creationIntent": "animal",
        "uploadTime": "2024-04-09T12:40:42.165633Z",
        "user": {
        "id": 3,
            "accountName": "xg",
            "nickname": null,
            "password": "gxg",
            "avatarUrl": null,
            "likesCount": 0,
            "followersCount": 0,
            "registrationTime": "2024-04-09T12:40:19.250052Z"
    }
},
    "commentEntityList": [
    {
        "id": 5, // 评论ID
        "user": {// 发表评论的用户
            "id": 3,
            "accountName": "xg",
            "nickname": null,
            "password": "gxg",
            "avatarUrl": null,
            "likesCount": 0,
            "followersCount": 0,
            "registrationTime": "2024-04-09T12:40:19.250052Z"
        },
        "picture": {
            "imageId": 5,
            "likesCount": 0,
            "url": "https://mydemo2.obs.cn-north-4.myhuaweicloud.com/picture/14ec4c00-fa8b-441a-a825-24215654ec70.jpeg",
            "category": "cat",
            "creationIntent": "animal",
            "uploadTime": "2024-04-09T12:40:42.165633Z",
            "user": {
                "id": 3,
                "accountName": "xg",
                "nickname": null,
                "password": "gxg",
                "avatarUrl": null,
                "likesCount": 0,
                "followersCount": 0,
                "registrationTime": "2024-04-09T12:40:19.250052Z"
            }
        },
        // 评论所属的图片
        "content": "very cute", // 评论内容
        "commentTime": "2024-04-09T20:41:48.071505" // 评论时间
    },
    {
        "id": 6,
        "user": {
            "id": 3,
            "accountName": "xg",
            "nickname": null,
            "password": "gxg",
            "avatarUrl": null,
            "likesCount": 0,
            "followersCount": 0,
            "registrationTime": "2024-04-09T12:40:19.250052Z"
        },
        "picture": {
            "imageId": 5,
            "likesCount": 0,
            "url": "https://mydemo2.obs.cn-north-4.myhuaweicloud.com/picture/14ec4c00-fa8b-441a-a825-24215654ec70.jpeg",
            "category": "cat",
            "creationIntent": "animal",
            "uploadTime": "2024-04-09T12:40:42.165633Z",
            "user": {
                "id": 3,
                "accountName": "xg",
                "nickname": null,
                "password": "gxg",
                "avatarUrl": null,
                "likesCount": 0,
                "followersCount": 0,
                "registrationTime": "2024-04-09T12:40:19.250052Z"
            }
        },
        "content": "very  very cute",
        "commentTime": "2024-04-10T09:02:53.198994"
    }
],
    "success": true,
    "message": "获取图片详情成功"
}
export default {*/
    // data(){
    //     return{
    //         data:{
    //             "userEntity": { /* 用户实体 */ },
    //             "pictureEntity": { /* 图片实体 */ },
    //             "comment": "评论内容"
    //         }
    //     }
    // },

  // post("/comments/upload",){
  //     setTimeout(100)
  // }
// }

// Importing methods from api.js
import { get, post, del } from './api';

const commentsApi = {
    // Fetch comments
    getCommentList(callback) {
        get('/comments/info').then(response => callback(response.data));
    },
    // Submit a new comment
    postComment(commentData) {
        return post('/comments/upload', commentData);
    },
    // Delete a comment
    deleteComment(commentId) {
        return del(`/comments/delete`, { commentId });
    }
};

export default commentsApi;
