import cartApi from "@/api/cart";
import xinxiApi from "@/store/modules/xinxi"; // 假定这是图片详情的 API

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
            xinxiApi.getPhotosList(photos => {
                const photo = photos.find(p => p.id === photoId);
                if (photo) {
                    const newItem = {
                        goods_id: photo.id,
                        img_id: photo.img_id,
                        goods_name: photo.zuozhe, // 图片作者作为商品名称
                        goods_price: photo.price,
                        add_time: new Date().toISOString() // 当前时间
                    };
                    commit('addToCart', newItem);
                }
            });
        }
    }
};
