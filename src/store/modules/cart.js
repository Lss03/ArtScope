
   const state={
        items: [
            // {
            //     "goods_id": 1,
            //     "img_id": 1,
            //     "goods_name": "goods1",
            //     "goods_price": 100,
            //     "good_owner_id": 1,
            //     "add_time":'2019-01-01 00:00:00'
            // },
            // {
            //     "goods_id": 2,
            //     "img_id": 1,
            //     "goods_name": "goods2",
            //     "goods_price": 101,
            //     "good_owner_id": 2,
            //     "add_time":'2019-01-01 00:00:00'
            // },
            // {
            //     "goods_id": 1,
            //     "img_id": 1,
            //     "goods_name": "goods1",
            //     "goods_price": 100,
            //     "good_owner_id": 1,
            //     "add_time":'2019-01-01 00:00:00'
            // },
            // {
            //     "goods_id": 1,
            //     "img_id": 1,
            //     "goods_name": "goods1",
            //     "goods_price": 100,
            //     "good_owner_id": 1,
            //     "add_time":'2019-01-01 00:00:00'
            // },
            // {
            //     "goods_id": 1,
            //     "img_id": 1,
            //     "goods_name": "goods1",
            //     "goods_price": 100,
            //     "good_owner_id": 1,
            //     "add_time":'2019-01-01 00:00:00'
            // },
            // {
            //     "goods_id": 1,
            //     "img_id": 1,
            //     "goods_name": "goods1",
            //     "goods_price": 100,
            //     "good_owner_id": 1,
            //     "add_time":'2019-01-01 00:00:00'
            // },
            // {
            //     "goods_id": 1,
            //     "img_id": 1,
            //     "goods_name": "goods1",
            //     "goods_price": 100,
            //     "good_owner_id": 1,
            //     "add_time":'2019-01-01 00:00:00'
            // },
            // {
            //     "goods_id": 1,
            //     "img_id": 1,
            //     "goods_name": "goods1",
            //     "goods_price": 100,
            //     "good_owner_id": 1,
            //     "add_time":'2019-01-01 00:00:00'
            // },
            // {
            //     "goods_id": 1,
            //     "img_id": 1,
            //     "goods_name": "goods1",
            //     "goods_price": 100,
            //     "good_owner_id": 1,
            //     "add_time":'2019-01-01 00:00:00'
            // },
            // {
            //     "goods_id": 1,
            //     "img_id": 1,
            //     "goods_name": "goods1",
            //     "goods_price": 100,
            //     "good_owner_id": 1,
            //     "add_time":'2019-01-01 00:00:00'
            // },
            // {
            //     "goods_id": 1,
            //     "img_id": 1,
            //     "goods_name": "goods1",
            //     "goods_price": 100,
            //     "good_owner_id": 1,
            //     "add_time":'2019-01-01 00:00:00'
            // },
            // {
            //     "goods_id": 1,
            //     "img_id": 1,
            //     "goods_name": "goods1",
            //     "goods_price": 100,
            //     "good_owner_id": 1,
            //     "add_time":'2019-01-01 00:00:00'
            // },
            // {
            //     "goods_id": 1,
            //     "img_id": 1,
            //     "goods_name": "goods1",
            //     "goods_price": 100,
            //     "good_owner_id": 1,
            //     "add_time":'2019-01-01 00:00:00'
            // },
            // {
            //     "goods_id": 1,
            //     "img_id": 1,
            //     "goods_name": "goods1",
            //     "goods_price": 100,
            //     "good_owner_id": 1,
            //     "add_time":'2019-01-01 00:00:00'
            // },
            // {
            //     "goods_id": 1,
            //     "img_id": 1,
            //     "goods_name": "goods1",
            //     "goods_price": 100,
            //     "good_owner_id": 1,
            //     "add_time":'2019-01-01 00:00:00'
            // },
        ],
        test:{
            id:null,
            src:null,
            price:null,
            zuozhe:null
    }
    }
    const actions= {
        getList({ commit },list) {
              commit('setList', list);
            }
        
    }
    
const mutations ={
    setList(state,data){
    // 创建一个新对象，包含 data 的属性
        const newItem={
        id: data.id,
        src: data.src,
        price: data.price,
        zuozhe: data.zuozhe
      };
  
      // 将新对象添加到 items 数组
        state.items.push(newItem);
    }
}
    export default {
        namespaced: true,
        state,
        actions,
        mutations
};

