import repoApi from "@/api/repository";
export default {
    namespaced: true,
    state: {
        items: [],
    },
    mutations: {
        setRepoList(state, repoList) {
            state.items = repoList;
        },
    },
    actions: {
        fetchRepoList({ commit }) {
            repoApi.getRepoList(RepoList => {
                commit('setRepoList', RepoList);
            });
        },
        updateRepoList({ commit }, newRepoList) {
            repoApi.updateRepoList(newRepoList, updatedRepoList => {
                commit('setRepoList', updatedRepoList);
            });
        },
    }
};

