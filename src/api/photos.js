let photo = [
  { 'id': 1, 'zuozhe': '明', 'like':20,'price': 50.01, src: require('@/assets/image/p1.jpg') },
  { 'id': 2, 'zuozhe': '李兰',  'like':20,'price': 50.01, src: require('@/assets/image/p2.jpg') },
  { 'id': 3, 'zuozhe': '刘艳',  'like':20,'price': 50.01, src: require('@/assets/image/p3.jpg') },
  { 'id': 4, 'zuozhe': '慧心',  'like':20,'price': 50.01, src: require('@/assets/image/p1.jpg') },
]

export default {
  getPhotosList (callback) {
    setTimeout(() => callback(photo), 100)
  }
}
