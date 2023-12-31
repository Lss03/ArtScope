<template>
    <div>
        <div style="float: left;" >
        <img src="../../assets/image/panda.png" style="border-radius: 50%; height: 60px;">
        <span>{{xinxi.zuozhe}}</span>
        <div style="margin-left: 50px">
                <img :src=xinxi.src style="border-radius: 15px;height: 450px;width: 800px;">
            </div>
        </div>
        <div style="float: left; border-radius: 15px;background-color: rgb(88, 193, 214);margin-left: 50px;margin-top:10px;width: 630px;height: 120px;border:8px solid rgb(118, 209, 219)">
            <div class="pjorprice">
            <v-icon  @click="add" color="black" style="margin: 20px;width:100px;height:40px;">mdi-star-outline</v-icon>
            <span class="f">{{xinxi.like}}</span>
                </div>
            <div class="pjorprice">
                <div style="margin:20px;font-size:30px;" >{{xinxi.price}}</div>
            </div>    
            
        </div>
        
                <div class="yitus" style="border-radius: 15px;background-color: rgb(88, 193, 214);margin-left: 50px;margin-top:10px;width: 630px;height: 120px;border:8px solid rgb(118, 209, 219)">{{ xinxi.yitu }}</div>
            </div>
   

</template>
<style>
.f{
    font-size: 30px;

}
@font-face{
    src:url("../../assets/font/Aa剑豪体.otf"),
    url("../../assets/font/汉仪瑞鹤.ttf"),
    url("../../assets/font/xuan.ttf");
    font-family:uuu;
}

.pjorprice{
     border-radius: 15%;
    width: 280px;
    margin: 10px;
    float: left;
    background-color: rgb(88,193,214);
    height: 100px;
    font-family:uuu;
}
.yitus{
    font-size:26px;
    font-family:uuu;
    border-radius:5%;
    width:580px;
    margin:5px;
    float:left;
    background-color: rgb(88,193,214);
    height:80px;
    color:rgb(14, 1, 1);
}
.top{
    width:100px;
    height:100px;
}

</style>
<script>
import xinxi from "@/store/modules/xinxi"

export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name:'photodetail',
    data(){
        return {
            xinxi:xinxi.state.pxinxi,
            flag:0
        }
    

    },
    methods:{
         
        add()
        {
            if(this.flag==0){
            this.$store.dispatch("photosInstance/addlike",this.$data.xinxi.id)
            this.$data.flag=this.$data.flag+1
}
            else {
            this.$store.dispatch("photosInstance/dellike",this.$data.xinxi.id)
            this.$data.flag=this.$data.flag-1
            }
        }
    }
    
}

</script>