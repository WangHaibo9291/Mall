<template>
    <div>
    <div class="choose">
      <div class="choose-spn">
          <ul class="leftNav">
            <li>
              <span>手机 手机卡</span> 
              <div class="bg"></div>
              <div class="left">
                <ul >
                  <li>
                    <div v-for="(item,i) of zz" :key="i" v-if="i < 10">
                        <a :href="'details/'+item.lid" >
                          <img class="small" :src="'http://127.0.0.1:4000/'+item.imgs" alt="">
                          <span class="title">{{item.uname}}</span>
                        </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
              <li>
              <span>电视 盒子</span> 
              <div class="bg"></div>
              <div class="left">
                <ul>
                  <li>
                    <div v-for="(item,i) of zz" :key="i" v-if="i >= 10&&i<=14">
                      <a :href="'details/'+item.lid" >
                        <img class="small" :src="'http://127.0.0.1:4000/'+item.imgs" alt="">
                        <span class="title">{{item.uname}}</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
              <li>
              <span>笔记本</span> 
              <div class="bg"></div>
              <div class="left">
                <ul>
                  <li>
                    <div v-for="(item,i) of zz" :key="i" v-if="i >= 15&&i<=19">
                      <a :href="'details/'+item.lid" >
                        <img class="small" :src="'http://127.0.0.1:4000/'+item.imgs" alt="">
                        <span class="title">{{item.uname}}</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
              <li>
              <span>家电</span> 
              <div class="bg"></div>
              <div class="left">
                <ul>
                  <li>
                    <div v-for="(item,i) of zz" :key="i" v-if="i >= 20&&i<=24">
                      <a :href="'details/'+item.lid" >
                        <img class="small" :src="'http://127.0.0.1:4000/'+item.imgs" alt="">
                        <span class="title">{{item.uname}}</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
              <li>
              <span>路由器</span> 
              <div class="bg"></div>
              <div class="left">
                <ul>
                  <li>
                    <div v-for="(item,i) of zz" :key="i" v-if="i >= 25&&i<=29">
                      <a :href="'details/'+item.lid" >
                        <img class="small" :src="'http://127.0.0.1:4000/'+item.imgs" alt="">
                        <span class="title">{{item.uname}}</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
              <li>
              <span>智能家居</span> 
              <div class="bg"></div>
              <div class="left">
                <ul>
                  <li>
                    <div v-for="(item,i) of zz" :key="i" v-if="i >= 30&&i<=34">
                      <a :href="'details/'+item.lid" >
                        <img class="small" :src="'http://127.0.0.1:4000/'+item.imgs" alt="">
                        <span class="title">{{item.uname}}</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
              <li>
              <span>耳机</span> 
              <div class="bg"></div>
              <div class="left">
                <ul>
                  <li>
                    <div v-for="(item,i) of zz" :key="i" v-if="i >= 35&&i<=40">
                      <a :href="'details/'+item.lid" >
                        <img class="small" :src="'http://127.0.0.1:4000/'+item.imgs" alt="">
                        <span class="title">{{item.uname}}</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <el-carousel :interval="5000" arrow="always" height="430px">
            <el-carousel-item class="imags" v-for="(item,i) in list" :key="i">
              <img :src="'http://127.0.0.1:4000/'+item.imgs" alt="">
            </el-carousel-item>
          </el-carousel>
      </div>
  </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
    list:[],
    zz:[]
    }
  },
  created(){
    this.loadMore();
    this.aa();
  },
  methods: {
     loadMore(){
        var url = "ind";
        this.axios.get(url).then(res=>{
        var data=res.data.data;
        this.list=data;
        })    
       }, 
      aa(){
        var url = "show";
        this.axios.get(url).then(res=>{
        var data=res.data.data;
        this.zz=data;
        })    
       }, 
       
  },
}
</script>
<style scoped>
    li{
  list-style: none;
}
.choose{
  width: 1200px;
  height: 430px;
  margin: 0 auto;
}
.carousel{
  width: 1200px;
  height: 430px;
}
.el-carousel__item h3 {
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .imags>img{
    width: 1200px;
    height: 430px;
  }
  .choose-spn{
    position: relative;
  }
  .leftNav{
    position: absolute;
    z-index: 9;
    width: 290px;
    height: 430px;
    background-color: rgba(105, 105, 105, 0.5)
    
   
  }
  .leftNav>li{
    width: 300px;
    height: 40px;
  }
  .leftNav>li{
    margin-top:20px; 
  }
  .leftNav>li:hover{
    background: #f40;
  }
  .leftNav>li:nth-child(1){
    margin-top:20px ;
  }
  .leftNav>li>span{
    font-size: 15px;
    line-height: 40px;
    margin-left: 50px;
  }
  .leftNav>li>.bg{
    width: 15px;
    height: 15px;
    background: url("../assets/left.png");
    margin-top:-28px;  
    margin-left:240px; 
  }
  .leftNav>li>.left>ul li{
    width: 900px;
    height: 430px;
    z-index: 12;
    position: absolute;
    top: 0px;
    left: 300px;
    opacity: 0.9;
    background: rgb(228, 223, 223);
    display: none;
  }
  .leftNav>li:hover>.left>ul li{
    display: block;
  }
  .leftNav>li>.left>ul li>div{
    width: 260px;
    height: 50px;
    float: left;
    margin-left: 50px;
    margin-top:20px; 
    position: relative;
  }
  .small{
    width: 50px;
    height: 40px;
    margin-top:5px; 
  }
  .title{
    position: absolute;
    top: 15px;
    left: 70px;
    font-size: 15px;
    color: #000;
  }
</style>