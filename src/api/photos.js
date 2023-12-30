let photo = [
  { 'id': 1, 'zuozhe': '明', 'like':20,'price': 50.01, src: require('@/assets/image/p5.jpg') },
  { 'id': 2, 'zuozhe': '李兰',  'like':20,'price': 50.01, src: require('@/assets/image/p6.jpg') },
  { 'id': 3, 'zuozhe': '刘艳',  'like':20,'price': 50.01, src: require('@/assets/image/p7.jpg') },
  { 'id': 4, 'zuozhe': '慧心',  'like':20,'price': 50.01, src: require('@/assets/image/p8.jpg') },
  { 'id': 5, 'zuozhe': '明', 'like':20,'price': 50.01, src: require('@/assets/image/p9.jpg') },
  { 'id': 6, 'zuozhe': '李兰',  'like':20,'price': 50.01, src: require('@/assets/image/p10.jpg') },
  { 'id': 7, 'zuozhe': '刘艳',  'like':20,'price': 50.01, src: require('@/assets/image/p11.jpg') },
  { 'id': 8, 'zuozhe': '慧心',  'like':20,'price': 50.01, src: require('@/assets/image/p12.jpg') },
  { 'id': 9, 'zuozhe': '明', 'like':20,'price': 50.01, src: require('@/assets/image/p13.jpg') },
  { 'id': 10, 'zuozhe': '李兰',  'like':20,'price': 50.01, src: require('@/assets/image/p14.jpg') },
  { 'id': 11, 'zuozhe': '刘艳',  'like':20,'price': 50.01, src: require('@/assets/image/p15.jpg') },
  { 'id': 12, 'zuozhe': '慧心',  'like':20,'price': 50.01, src: require('@/assets/image/p16.jpg') },
  { 'id': 13, 'zuozhe': '明', 'like':20,'price': 50.01, src: require('@/assets/image/p17.jpg') },
  { 'id': 14, 'zuozhe': '李兰',  'like':20,'price': 50.01, src: require('@/assets/image/p18.jpg') },
  { 'id': 15, 'zuozhe': '刘艳',  'like':20,'price': 50.01, src: require('@/assets/image/p19.jpg') },
  { 'id': 16, 'zuozhe': '慧心',  'like':20,'price': 50.01, src: require('@/assets/image/p20.jpg') },
]

export default {
  getPhotosList (callback) {
    setTimeout(() => callback(photo), 100)
  }
}
