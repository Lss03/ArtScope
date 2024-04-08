import cartApi from "@/api/cart";
import photoApi from "@/api/photos"; // 假定这是图片详情的 API
import formatApi from "@/utils/Formate";

export default {
    namespaced: true,
    state: {
        items: [],
    },
    mutations: {
        setCartList(state, cartList) {
            state.items = cartList;
        },
        addToCart(state, item) {
            state.items.push(item);
        },
        //根据img_id删除购物车中的商品
        removeCartItemByI_id(state, id) {
            const index = state.items.findIndex(item => item.img_id === id);
            state.items.splice(index, 1);
        }
    },
    actions: {
        fetchCartList({ commit }) {
            cartApi.getCartList(cartList => {
                commit('setCartList', cartList);
            });
        },
        // eslint-disable-next-line no-unused-vars
        addPhotoToCart({ commit, state }, photoId) {
            // 获取照片详情
            photoApi.getPhotosList(photos => {
                const photo = photos.find(p => p.id === photoId);
                if (photo) {
                    const newItem = {
                        goods_id: photo.id,
                        img_id: photo.id,
                        goods_name: photo.zuozhe, // 图片作者作为商品名称
                        goods_price: photo.price,
                        add_time: formatApi.dateNow(), // 当前时间
                    };
                    commit('addToCart', newItem);
                }
            });
        },
        removePhotoFromCart({ commit }, id) {
            commit('removeCartItemByI_id', id);
        }
    },
    //使用getter，根据img_id获取商品信息
    getters: {
        getCartItemById: state => id => {
            return state.items.find(item => item.img_id === id);
        }
    }
};
