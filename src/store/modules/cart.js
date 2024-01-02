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
                        img_id: photo.img_id,
                        goods_name: photo.zuozhe, // 图片作者作为商品名称
                        goods_price: photo.price,
                        add_time: formatApi.dateNow(), // 当前时间
                    };
                    commit('addToCart', newItem);
                }
            });
        }
    }
};
