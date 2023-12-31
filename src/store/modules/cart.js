import cartApi from "@/api/cart";
export default {
    namespaced: true,
    state: {
        items: [],
    },
    mutations: {
        setCartList(state, cartList) {
            state.items = cartList;
        },
    },
    actions: {
        fetchCartList({ commit }) {
            cartApi.getCartList(cartList => {
                commit('setCartList', cartList);
            });
        },
        updateCartList({ commit }, newCartList) {
            cartApi.updateCartList(newCartList, updatedCartList => {
                commit('setCartList', updatedCartList);
            });
        },
    }
};

