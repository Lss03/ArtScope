let photo = [
  { 'id': 1, 'zuozhe': '明', 'like':58,'price': 59, 'xiangqing':'雾气缭绕的山谷中的梯田，金黄色的油菜花与绿色植被交织。阳光穿透云层，给部分田野和远山投下光影。中间的村庄与自然景观和谐共存，呈现一种宁静的田园风光。',src: require('@/assets/image/p5.jpg') },
  { 'id': 2, 'zuozhe': '李兰',  'like':20,'price': 25,'xiangqing':'清晨的湖面上，一座教堂和周围建筑在宁静的湖水中映出倒影，背后群山和薄雾营造出一种宁静神秘的氛围。天空和水面呈现出渐变的晨光色彩，给这幅画面增添了宁静而梦幻的美感。', src: require('@/assets/image/p6.jpg') },
  { 'id': 3, 'zuozhe': '刘艳',  'like':200,'price': 56,'xiangqing':'阳光透过树林的缝隙洒在安静的林荫道上，形成了光影交错的效果。这条由高大树木排列两旁的道路，带来了一种平和与宁静的感觉，似乎邀请人们漫步其中，享受清新的空气和自然之美。',src: require('@/assets/image/p7.jpg') },
  { 'id': 4, 'zuozhe': '慧心',  'like':70,'price': 25,'xiangqing':'这幅图展现了霞光映照的海滨景象，天空呈现出渐变的紫红色至橙黄色，而海面则在夕阳的余晖下泛着粉紫色的光泽。海岸线平静，浪花轻拍着沙滩，带来宁静而浪漫的气氛。', src: require('@/assets/image/p8.jpg') },
  { 'id': 5, 'zuozhe': '明', 'like':60,'price': 85,'xiangqing':'一只有着蓝色眼睛的布偶猫，它躺在白色的背景上。猫咪的毛色以白色和浅棕色为主，面部有典型的暗色面罩。它的表情平静，目光略带好奇，展现了布偶猫温柔的特质。', src: require('@/assets/image/p9.jpg') },
  { 'id': 6, 'zuozhe': '李兰',  'like':75,'price': 47,'xiangqing':'这张图片温馨地捕捉了两只小猫在篮子里相互依偎着睡觉的瞬间。它们的毛色相似，带有灰白色的条纹，脸上有淡淡的斑纹。小猫们紧闭的眼睛和平静的表情传达出一种安心与舒适。', src: require('@/assets/image/p10.jpg') },
  { 'id': 7, 'zuozhe': '刘艳',  'like':86,'price': 89,'xiangqing':'一只毛茸茸的小奶猫在草地上。它有着柔软的淡黄色的毛发和一双大大的蓝色眼睛。阳光从背后洒下，使得小猫的轮廓边缘呈现出一层光晕。小猫的目光似乎专注地注视着远方，表情好奇而专注。', src: require('@/assets/image/p11.jpg') },
  { 'id': 8, 'zuozhe': '慧心',  'like':99,'price': 26,'xiangqing':'三只可爱的小猫并排坐着，正面对镜头。它们的毛色各异：左边是橘白相间，中间是棕黑搭配条纹，右边也是橘白色，但毛色更为鲜明。它们的眼神好奇而警觉，似乎在专注地观察着摄影师。', src: require('@/assets/image/p12.jpg') },
  { 'id': 9, 'zuozhe': '明', 'like':59,'price': 61,'xiangqing':'展现了两栋现代高层建筑的对比角度，建筑物的玻璃幕墙在晴朗的天空下映出深蓝色的光泽。这些建筑的简洁线条与蓝天形成了鲜明的几何对比。', src: require('@/assets/image/p13.jpg') },
  { 'id': 10, 'zuozhe': '李兰',  'like':90,'price': 78,'xiangqing':'这张黑白照片以低角度拍摄了一栋现代建筑，强调了其锐利的边缘和几何形状。建筑对天空的剪影与云朵的自然曲线形成鲜明对比，营造出一种向上延伸至无限的视觉效果。', src: require('@/assets/image/p14.jpg') },
  { 'id': 11, 'zuozhe': '刘艳',  'like':50,'price': 14,'xiangqing':'显示了一个以冷色调呈现的现代建筑模型，具有多层次和透明感的立面设计。建筑的线条简洁直接，表面反射和折射的光线营造出未来感强烈的氛围。', src: require('@/assets/image/p15.jpg') },
  { 'id': 12, 'zuozhe': '慧心',  'like':89,'price': 56,'xiangqing':'这张照片展示了一栋现代风格的建筑，拥有显著的黑色框架和大面积的玻璃窗户。建筑的几何形态清晰，与蓝天白云形成鲜明对比，体现了都市建筑的简洁美感。', src: require('@/assets/image/p16.jpg') },
  { 'id': 13, 'zuozhe': '明', 'like':43,'price': 25, 'xiangqing':'一只快乐的博美犬在草地上奔跑的瞬间。它的毛发蓬松而光泽，呈现出一种淡棕色，狗狗的表情显得非常开心，眼睛闪烁着兴奋的光芒，整个身姿显得轻快而活泼。',src: require('@/assets/image/p17.jpg') },
  { 'id': 14, 'zuozhe': '李兰',  'like':87,'price': 50, 'xiangqing':'这张图片捕捉了一只休息中的阿拉斯加雪橇犬，它躺在郁郁葱葱的草地上。这只狗狗拥有典型的厚重毛皮，黑白相间的毛色和深邃的蓝眼睛。它的表情平静，似乎在享受宁静的户外环境。',src: require('@/assets/image/p18.jpg') },
  { 'id': 15, 'zuozhe': '刘艳',  'like':250,'price': 25, 'xiangqing':'图片中是一只小狗宝宝，它躺在一块树桩上休息。这只幼犬有着柔软的淡棕色毛发和黑色的面部标记，它的眼神温和，似乎有些困倦，整个姿态展现出一种安详和放松的气氛。',src: require('@/assets/image/p19.jpg') },
  { 'id': 16, 'zuozhe': '慧心',  'like':500,'price': 50,'xiangqing':'这张图片展示了两只伯恩山犬幼犬，它们的毛色呈现出品种特有的黑、白、棕三色。两只小狗显得活泼愉快，正面对着镜头，嘴角微微上扬，眼神中充满了好奇和友好。', src: require('@/assets/image/p20.jpg') },
]

export default {
  getPhotosList (callback) {
    setTimeout(() => callback(photo), 100)
  }
}
