<template>
      <div class="navIndex">
      <a href="/"><img src="../assets/logo.jpg" alt="这是一张图片"></a>
        <ul>
          <li class="navLi">
            <span>小米手机</span> 
            <div class="navImg" >
              <div class="aa">
                <ul v-for="(item,i) in list" :key="i">
                  <li v-if="i < 5" >
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
            </div>
          </li>
           <li class="navLi">
            <span>Redmi红米</span> 
            <div class="navImg" >
              <div class="aa">
                <ul v-for="(item,i) of list" :key="i">
                  <li v-if="i<10&&i>=5">
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
            </div>
          </li>
           <li class="navLi">
            <span>电视</span> 
            <div class="navImg" >
              <div class="aa">
                <ul v-for="(item,i) of list" :key="i">
                  <li v-if="i<=14&&i>=10">
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
            </div>
          </li>
           <li class="navLi">
            <span>笔记本</span> 
               <div class="navImg" >
              <div class="aa">
                <ul v-for="(item,i) of list" :key="i">
                  <li v-if="i<=19&&i>=15">
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
            </div>
          </li>
           <li class="navLi">
            <span>家电</span> 
             <div class="navImg" >
              <div class="aa">
                <ul v-for="(item,i) of list" :key="i">
                  <li v-if="i<=24&&i>=20">
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
            </div>
          </li>
           <li class="navLi">
            <span>路由器</span> 
            <div class="navImg" >
              <div class="aa">
                <ul v-for="(item,i) of list" :key="i">
                  <li v-if="i<=29&&i>=25">
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
            </div>
          </li>
           <li class="navLi">
            <span>智能硬件</span> 
            <div class="navImg" >
              <div class="aa">
                <ul v-for="(item,i) of list" :key="i">
                  <li v-if="i<=35&&i>=30">
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
            </div>
          </li>
           <li class="navLi">
            <span>服务</span> 
          </li>
           <li class="navLi">
            <span>社区</span> 
          </li>
        </ul>
        <div class="seek">
          <input class="seekBox" v-model.trim="kws" placeholder="请输入内容">
          <button class="button" @click="btn"><img src="../assets/seek.png" alt=""></button> 
        </div>   
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:{},//保存服务器返回数据
       pno:0,
       kws:'' //表示当前页码
    }
  },
  created(){
    this.loadMore();
    },
  methods: {
    btn(){
      if(this.kws!==""){
        var k =this.kws;
        var url = "sou"
        var obj={uname:k}
        this.axios.get(url,{params:obj}).then(res=>{
          var aa=res.data.data;
          var cc=aa[0].lid;
          this.$router.push("/show/"+cc);
          console.log(aa);
          
        })
      }
    },
    loadMore(){
      var url = "product";
      this.pno++;
      var obj = {pno:this.pno}
      this.axios.get(url,{params:obj}).then(res=>{
      var rows =res.data.data;
      this.list = rows;
      })
    },
  }
}
</script>
<style scoped>
li{
    list-style: none;
}
.navIndex{
  width: 1200px;
  height: 100px;
  margin: 0 auto;
  line-height: 100px;
  position: relative;
}
.navIndex>a>img{
  width: 55px;
  height: 55px;
  float: left;
  margin-top:25px; 
}
a{
  text-decoration: none;
  color: rgb(58, 57, 57);
}
.navHead{
  width: 550px;
  height: 30px;
}
.seek{
  position: absolute;
  top: 5px;
  left: 925px;
}
.seekBox{
  width: 230px;
  height: 40px;
  float: left;
  margin-top:20px; 
  outline:none;
  border-radius: 0;
}
.button{
  width: 40px;
  height: 44px;
  margin-top: 20px;
  float: left;
  border-radius: 0;
}
.navIndex>ul{
  width: 550px;
  height: 100px;
  margin-left:300px; 
  display: flex;
  justify-content: space-around
}
.navIndex>ul li{
  float: left;
  cursor:pointer;
  
}
.navIndex>ul li>.navImg{
  display: none;
  position: fixed;
  cursor:pointer;
   transition-duration: 1s;
}
.navIndex>ul .navLi:hover>div{
  z-index: 100;
  width: 180%;
  height: 300px;
  position: absolute;
  left: -480px; 
  background-color: #fff; 
  display: flex;
 
}
.navImg>.aa>ul li{
  width: 240px;
  height: 280px;
  position: relative;
}
.navImg>.aa{
  width: 1200px;
  height: 150px;
  margin: 0 auto;
}
.navImg>.aa>ul li a>img{
  width: 230px;
  height: 150px;
  margin-left:10px;
  margin-top:40px; 
}
.title{
  width: 240px;
  height: 80px;
  margin-top: -55px;
}
.navSpan{
  text-align: center;
  margin-top: -30px;
}
.navSpan1{
  text-align: center;
  margin-top: -70px;
  color:#f40;
}
</style>