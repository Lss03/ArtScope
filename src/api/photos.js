var photo = [
  { 'id': 1, 'zuozhe': '明', 'like':10,'price':"price:50", src: require('@/assets/image/p5.jpg'),"yitu":"创作意图：旨在展示远近景的对比，近处的树林在远方蔚蓝的天空下的山峰的衬托下显得更加翠绿" },
  { 'id': 2, 'zuozhe': '李兰',  'like':14,'price': "price:88", src: require('@/assets/image/p6.jpg'),"yitu":"创作意图:旨在展示山与湖泊的倒影，通过对称构图实现山河的秀丽" },
  { 'id': 3, 'zuozhe': '刘艳',  'like':44,'price': "price:99.9", src: require('@/assets/image/p7.jpg'),"yitu":"创作意图:旨在突出树林的静谧，一缕阳光穿过森林洒在乡间小路上" },
  { 'id': 4, 'zuozhe': '慧心',  'like':75,'price': "price:19.9", src: require('@/assets/image/p8.jpg') ,"yitu":"创作意图:旨在突出海的壮阔，天空犹如火烧云将海晕染的五颜六色"},
  { 'id': 5, 'zuozhe': '明', 'like':1984,'price': "price:39.9", src: require('@/assets/image/p9.jpg'),"yitu":"创作意图:旨在突出猫咪的可爱，一只海双布偶静静地卧着" },
  { 'id': 6, 'zuozhe': '李兰',  'like':999,'price': "price:19.98", src: require('@/assets/image/p10.jpg'),"yitu":"创作意图:旨在突出新生的希望，两只小猫相互依偎把头埋进对方怀里" },
  { 'id': 7, 'zuozhe': '刘艳',  'like':43615,'price':"price:128", src: require('@/assets/image/p11.jpg'),"yitu":"创作意图:旨在突出猫咪的活力，阳光洒在一只小猫的身上更显活力" },
  { 'id': 8, 'zuozhe': '慧心',  'like':47,'price': "price:648", src: require('@/assets/image/p12.jpg'),"yitu":"创作意图:旨在展示小猫的类型，三只不同花色的小猫并排站在一起"},
  { 'id': 9, 'zuozhe': '明', 'like':47,'price': "price:55", src: require('@/assets/image/p13.jpg'),"yitu":"创作意图:旨在突出构图特色，通过斜角构图显示出大楼的雄伟"},
  { 'id': 10, 'zuozhe': '李兰',  'like':47,'price': "price:79", src: require('@/assets/image/p14.jpg'),"yitu":"创作意图:旨在突出构图特色，通过对称构图法和俯拍的摄影手段展示大楼" },
  { 'id': 11, 'zuozhe': '刘艳',  'like':34,'price':"price:59", src: require('@/assets/image/p15.jpg'),"yitu":"创作意图:旨在突出色调搭配，采用绿色调将时间线拉回从前" },
  { 'id': 12, 'zuozhe': '慧心',  'like':795,'price':"price:69", src: require('@/assets/image/p16.jpg'),"yitu":"创作意图:旨在突出画面的通透，通过对天气和光线的把握拍摄一组通透性强的图片" },
  { 'id': 13, 'zuozhe': '明', 'like':666,'price':"price:49", src: require('@/assets/image/p17.jpg'),"yitu":"创作意图:旨在突出小狗的可爱，一只小萨面带微笑缓缓走来" },
  { 'id': 14, 'zuozhe': '李兰',  'like':888,'price':"price:59.9", src: require('@/assets/image/p18.jpg'),"yitu":"创作意图:旨在突出小哈的萌，一只哈士奇懒洋洋的卧着看向镜头" },
  { 'id': 15, 'zuozhe': '刘艳',  'like':147,'price': "price:39.9", src: require('@/assets/image/p19.jpg'),"yitu":"创作意图:旨在突出小狗的可爱，一直小狗狗下巴贴地趴在地上" },
  { 'id': 16, 'zuozhe': '慧心',  'like':136,'price': "price:19.9", src: require('@/assets/image/p20.jpg'),"yitu":"创作意图:旨在突出双胞胎小狗，两只小狗相互依偎" },
]
export default {
  getPhotosList (callback) {
    setTimeout(() => callback(photo), 100)
  }
}
