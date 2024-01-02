let cartList = [
    {
        goods_id: 1,
        img_id: 1,
        goods_name: "goods1",
        goods_price: 100,
        good_owner_id: 1,
        add_time: '2019-01-01 00:00:00'
    },
    {
        goods_id: 1,
        img_id: 1,
        goods_name: "goods1",
        goods_price: 100,
        good_owner_id: 1,
        add_time: '2019-01-01 00:00:00'
    },
    {
        goods_id: 1,
        img_id: 1,
        goods_name: "goods1",
        goods_price: 100,
        good_owner_id: 1,
        add_time: '2019-01-01 00:00:00'
    },
    {
        goods_id: 1,
        img_id: 1,
        goods_name: "goods1",
        goods_price: 100,
        good_owner_id: 1,
        add_time: '2019-01-01 00:00:00'
    }
];
export default {
    getCartList(callback) {
        setTimeout(() => callback(cartList), 100)
    },
}
