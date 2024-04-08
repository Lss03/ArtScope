const state={
    pxinxi:[]
   }
const mutations={
    getlist(state,item)
    {
        state.pxinxi=item
    }
   }
const actions={
       getphoto({commit},key)
       {
        commit("getlist",key)
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}
