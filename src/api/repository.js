let repoList = [
    { id: 1234, zuozhe: "明", like:20,price: 50.01, src: require('@/assets/image/p1.jpg') },
    { id: 2134, zuozhe: "李兰",  like:20,price: 50.01, src: require('@/assets/image/p2.jpg') },
    { id: 3312, zuozhe: "刘艳",  like:20,price: 50.01, src: require('@/assets/image/p3.jpg') },
    { id: 1232, zuozhe: "慧心",  like:20,price: 50.01, src: require('@/assets/image/p1.jpg') },
]
export default {
    getRepoList (callback) {
        setTimeout(() => callback(repoList), 100)
    }
}
