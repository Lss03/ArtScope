// store/modules/photos.js
import api from '@/api/photos'; // 假设 api 文件名为 photo.js

const state = {
    list: []
};

const actions = {
    getList({ commit }) {
        api.getPhotosList(data => {
            commit('setList', data);
        });
    },
    addlike(context,id){
      state.list.forEach((item)=>{
        if(item.id==id)
        item.like=item.like+1
      })


    }, 
    dellike(context,id){
        state.list.forEach((item)=>{
          if(item.id==id)
          item.like=item.like-1
        })
  
  
      }
    
};

const mutations = {
    setList(state, data) {
        state.list = data;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
