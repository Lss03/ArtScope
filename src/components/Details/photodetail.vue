<template>
    <div>
        <div style="float: left;" >
        <img src="../../assets/image/panda.png" style="border-radius: 50%; height: 60px;">
        <span>{{this.$data.zuozhe}}</span>
        <div style="margin-left: 50px">
                <img :src=this.$data.src style="border-radius: 15px;height: 280px;width: 500px;">
            </div>
        </div>
        <div style="float: left; border-radius: 15px;background-color: rgb(182, 204, 221);margin-left: 50px;margin-top:50px;width: 600px;height: 300px;">
            <div class="pjorprice">
                <span class="f">{{this.$data.like}}</span>
            </div>
            <div class="pjorprice">
                <span class="f">{{this.$data.price}}</span>
            </div>
        </div>
       </div>
   

</template>
<style>
.f{
    font-size: 50px;
}
.pjorprice{
     border-radius: 15%;
    width: 280px;
    margin: 10px;
    float: left;
    background-color: rgb(167, 180, 192);
    height: 170px;
}
</style>
<script>
import xinxi from "@/store/modules/xinxi"

export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name:'photodetail',
    data(){
        return xinxi.state.pxinxi
    

    }
}
</script>