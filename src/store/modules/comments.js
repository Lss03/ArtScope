// src/store/modules/comments.js
import { postComment, deleteComment } from '@/api/comment';

export default {
    namespaced: true,
    state: {
        comments: [],
    },
    mutations: {
        ADD_COMMENT(state, comment) {
            state.comments.push(comment);
        },
        REMOVE_COMMENT(state, commentId) {
            state.comments = state.comments.filter(comment => comment.id !== commentId);
        }
    },
    actions: {
        // 初始化评论状态，可以从photoDetails的commentEntityList中调用
// 提交评论的动作，需要从调用处传入具体的评论数据
        // src/store/modules/comments.js
        async submitComment({ commit, rootState, dispatch }, { commentText }) {
            try {
                // 假设rootState.photos.photoDetails已经包含了当前查看的图片的全部详情


                // 假设您有办法从状态或其他地方获取当前登录用户的详细信息
                const userEntity = rootState.user.userDetails;
                const pictureEntity = rootState.photos.photoDetails.pictureEntity;// 请根据您的应用调整这一行
                const commentData = {
                    userEntity,
                    pictureEntity,
                    comment: commentText,
                };

                const response = await postComment(commentData);

                if (response.data.success) {
                    commit('ADD_COMMENT', response.data.commentEntity);
                    // 这里假设服务器响应中返回了完整的评论实体
                    // 更新photos模块中的评论列表，确保与当前状态一致
                    dispatch('photos/updatePhotoDetailsComments', rootState.photos.photoDetails, { root: true });
                }
            } catch (error) {
                console.error('Error submitting comment:', error);
                throw error;
            }
        },



        // 删除评论的动作
        async deleteComment({ commit, rootState, dispatch }, commentId) {
            try {
                const response = await deleteComment(commentId);
                if (response.data.success) {
                    commit('REMOVE_COMMENT', commentId);
                    // 更新photos模块中的评论列表
                    dispatch('photos/updatePhotoDetailsComments', rootState.photos.photoDetails, { root: true });
                }
            } catch (error) {
                console.error('Error deleting comment:', error);
                throw error;
            }
        }
    },
    getters: {
        comments(state) {
            return state.comments;
        }
    }
};
