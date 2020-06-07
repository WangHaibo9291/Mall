<template>
<div>
  <div>
    <myNav></myNav>
    <Marquee></Marquee>
  </div>
  <div>
      <ul class="topShow">
        <li class="show" v-for="(item,i) of xx" :key="i"  v-if="i<4">
          <div>
            <a :href="'details/'+item.lid" >
              <img :src="'http://127.0.0.1:4000/'+item.imgs" alt="">
            </a>
          </div>
        </li>
      </ul>
  </div>
  <div class="phone">
    <p>手机</p>
    <ul class="phoneShow" >
      <li class="showLeft" v-for="(item,i) of zz" :key="i">
         <a :href="'details/'+item.lid">
              <img :src="'http://127.0.0.1:4000/'+item.imgs" alt="图片">
                  <p></p>
                  <div class="title">
                  <p class="navSpan">{{item.uname}}</p>
                  <p class="navSpan1">¥{{item.price}}元起</p>
                  </div>
          </a>
      </li>
    </ul>
  </div>
  <div class="phone">
    <p>电视 电脑</p>
    <ul class="phoneShow" >
      <li class="showLeft" v-for="(item,i) of zz" :key="i" v-if="i>10&&i<19">
         <a :href="'details/'+item.lid">
              <img :src="'http://127.0.0.1:4000/'+item.imgs" alt="图片">
                  <div class="title">
                  <p class="navSpan">{{item.uname}}</p>
                  <p class="navSpan1">¥{{item.price}}元起</p>
                  </div>
          </a>
      </li>
    </ul>
  </div>
  <div class="video">
    <p>视频</p>
    <ul> 
      <p :class="{'cha':cha,'aa':as}"  @click="vid()">×</p>
      <li class="videoImg" @click="video()">
        <img src="http://127.0.0.1:4000/1234.jpg" alt="图片">
        <p>小米5G新品手机发布会</p>
        <div :class="{'dem':isA,'demo':isB}" >
           
            <video-player class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :playsinline="true"
                          :options="playerOptions">
            </video-player>
          </div>
      </li>
      <li class="videoImg" @click="video()">
        <img src="http://127.0.0.1:4000/1234.jpg" alt="图片">
        <p>小米5G新品手机发布会</p>
        <div :class="{'dem':isA,'demo':isB}" >
           
            <video-player class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :playsinline="true"
                          :options="playerOptions">
            </video-player>
          </div>
      </li>
      <li class="videoImg" @click="video()">
        <img src="http://127.0.0.1:4000/1234.jpg" alt="图片">
        <p>小米5G新品手机发布会</p>
        <div :class="{'dem':isA,'demo':isB}" >
           
            <video-player class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :playsinline="true"
                          :options="playerOptions">
            </video-player>
          </div>
      </li>
      <li class="videoImg" @click="video()">
        <img src="http://127.0.0.1:4000/1234.jpg" alt="图片">
        <p>小米5G新品手机发布会</p>
        <div :class="{'dem':isA,'demo':isB}" >
           
            <video-player class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :playsinline="true"
                          :options="playerOptions">
            </video-player>
          </div>
      </li>
    </ul>
  </div>
  <div class="base">
        <div class="center">
            <a href="/">
                <img src="../assets/logo.jpg" alt="这是一张图片">
            </a>
            <ul class="bang">
                <li>关于我们</li>
                <li>服务支持</li>
                <li>帮助中心</li>
                <li>线下门店</li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
import myNav from './nav'
import Marquee from './slideshow'
export default {
  components:{
    myNav,
    Marquee
    },
    data() {
    return {
      isA:false,
      isB:true,
      cha:false,
      as:true,
      zz:[],
      xx:[],
       playerOptions: {
                    //播放速度
                    playbackRates: [0.5, 1.0, 1.5, 2.0], 
                    //如果true,浏览器准备好时开始回放。
                    autoplay: false, 
                    // 默认情况下将会消除任何音频。
                    muted: false, 
                    // 导致视频一结束就重新开始。
                    loop: false, 
                    // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    preload: 'auto', 
                    language: 'zh-CN',
                     // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    aspectRatio: '16:9',
                     // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    fluid: true,
                    sources: [{
                        //类型
                        type: "video/mp4",
                        //url地址
                        src: 'http://127.0.0.1:4000/111.mp4' 
                    },
                    {
                        //类型
                        type: "video/mp4",
                        //url地址
                        src: 'http://127.0.0.1:4000/111.mp4' 
                    }],
                    //你的封面地址
                    poster: '', 
                     //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    notSupportedMessage: '此视频暂无法播放，请稍后再试',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        //全屏按钮
                        fullscreenToggle: true  
                    }
                }
    }
  },
  created(){
    this.ss();
    this.aa();
  },
     methods: {
      ss(){
        var url = "show";
        this.axios.get(url).then(res=>{
        var data=res.data.data;
        console.log(data);
        this.zz=data;
        console.log(this.zz);
        
        })    
      }, 
       aa(){
        var url = "topshow";
        this.axios.get(url).then(res=>{
        var data=res.data.data;
        console.log(data);
        this.xx=data;
        console.log(this.xx);
        
        })    
       }, 
       video(){
         this.playerOptions.autoplay=true;
         this.isA=true;
         this.cha=true;
         this.as=false;
       },
       vid(){
         this.playerOptions.autoplay=false;
         this.isA=false;
         this.as=true;
       }
     }
}
</script>
<style scoped>
.topShow{
  width: 1200px;
  height: 180px;
  margin:  0 auto;
  display: flex;
  justify-content:space-between ;
}
li{
  list-style: none;
}
.show{
  width: 290px;
  height: 180px;
  float: left;
}
.show>div>a>img{
  width: 290px;
  height: 180px;
}
.phone{
  width: 1200px;
  margin: 0 auto;
  /* margin-top: 30px; */
}
.phone>p{
  font-size: 23px;
}
.phoneShow{
  width: 1220px;
  height: 620px;
  overflow: hidden;
}
.showLeft{
  position: relative;
  width: 283px;
  height: 290px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color:rgb(253, 252, 252); 
  float: left;
}
.showLeft>a>img{
  position: absolute;
  width: 230px;
  height: 150px;
  left:30px ;
  top: 30px;
  margin-bottom: 20px;
  transition-duration: 1s;
}
.title{
  position: absolute;
  width: 100px;
   height: 170px;
  height: 50px;
  top: 210px;
  left: 50%;
  margin-left: -50px;
}
.title>p{
  text-align: center;
  color: #000;
}
a{
  text-decoration: none;
}
.title>P:nth-child(2){
  color: #F40;
}
.base{
    box-shadow:0 0 12px rgb(207, 202, 202);
    height: 200px;
}
.center{
    width: 1200px;
    margin: 0 auto;
    position: relative;
}
.center>a>img{
    width: 55px;
    height: 55px;
    margin-top:80px;
}
.bang{
    width: 500px;
    height: 50px;
    position: absolute;
    top:90px;
    left: 300px;
    display: flex;
    justify-content: space-between;
}
li{
    list-style: none;
    float: left;
}
.video{
  width: 1200px;
  height: 400px;
  margin:0 auto;
}
.videoImg>img{
  width: 280px;
  height: 180px;
}
.videoImg{
  width: 280px;
  height: 300px;
  margin-top:20px;
  background-color: rgb(255, 249, 249);
}
.videoImg>p{
  line-height: 100px;
  text-align: center;
}
.demo{
  display: none;
}
.dem{
  z-index: 200;
  width: 800px;
  height: 500px;
  position: fixed;
  top: 20%;
  left: 50%;
  margin-left: -400px;
  display: block;
}
.video>ul{
  position: relative;
  
}
.cha{
  width: 40px;
  height: 40px;
  background-color: rgb(248, 231, 231);
  z-index: 300;
  position: absolute;
  left: 80%;
  top: -195px;
  font-size: 55px;
  text-align: center;
  color: #f40;
  border: none;
}
.cha{
  line-height:30px;
}
.aa{
  display: none;

}
.video>ul>li{
  margin-left: 10px;
}
</style>
