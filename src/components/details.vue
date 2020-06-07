<template> 
    <div>
       <div>
         <myNav></myNav>  
       </div>
        <div class="det">
            <div class="Carousel">
                    <el-carousel indicator-position="outside" height="480px">
                        <el-carousel-item v-for="(item,i) in imgs" :key="i">
                            <img class="imgs" :src="'http://127.0.0.1:4000/'+item.img" alt="">
                    </el-carousel-item>
                    </el-carousel>   
            </div>  
            <div id="app" class="right" v-for="(item,i) of list" :key="i">
                    <p @change="Text($event)">{{item.uname}}</p>
                    <p>{{item.title}}</p>
                    <p>自营</p>
                    <div class="xian"></div>
                    <el-cascader
                    size="large"
                    :options="options"
                    v-model="selectedOptions"
                    @change="handleChange">
                    </el-cascader>
                    <div class="option1">
                        <p>选择显卡</p>
                        <div v-for="(item,i) of list" :key="i">
                            <ul class="edition">
                                <li :class="{aa:j===i}"><p @click="Ddr($event,item.price,i,item.uname)" >{{item.ddr}}</p></li>
                            </ul>
                        </div>
                    </div>
                    <div class="option2"> 
                        <p>选择版本</p>
                            <div v-for="(item,i) of list" :key="i">
                                <ul class="color">
                                    <li :class="{aa:s==i}" @click="Col($event,i,item.imgs,item.lid)" >{{item.colour}}</li>
                                </ul>
                            </div>
                    </div>
                    <div class="price" v-if="price==0">
                        <p>¥{{list[0].price}}</p>
                    </div>
                    <div class="price" v-else>
                        <p>¥{{price}}</p>
                    </div>
                    <button class="shop" @click="add">加入购物车</button>
            </div>
        </div>
    </div>
</template>
<script>
import myNav from './nav'
 import { regionDataPlus } from 'element-china-area-data'
export default {
    props:["lid"],
    data () {
      return {
        list:{},
        imgs:[],
        ddr:"",
        col:"",
        uname:"",
        ss:"",
        id:"",
        j:0,
        s:0,
        price:"",
        options: regionDataPlus,
        selectedOptions: [],
      } 
    },
    created(){
    this.loadMore();
    this.img();
    },
    methods: {
      Ddr(e,c,k,u){
          console.log(e.target.innerHTML);
          var ddr=e.target.innerHTML;
          this.ddr=ddr;  
          this.price=c;
          this.j=k;
          this.uname= u;
          
      },
      Col(e,k,s,a){
          console.log(e.target.innerHTML);
          var col=e.target.innerHTML;
          this.col=col;  
            this.s=k;
            this.ss=s;
            this.id =a;
      },
      add(){
          var url="add";
          var o = this.selectedOptions;
          var p = this.price;
          var d = this.ddr;
          var c = this.col;
          var u = this.uname;
          var s = this.ss;
          var lid =this.id;
          console.log(o);
          if(!o.length){
              this.$message("请选择地址");
              return;
          };
          if(!d.length){
              this.$message("请选择型号");
              return;
          }
          if(!c.length){
              this.$message("请选择颜色");
              return;
          }
          
          var obj= {lid:lid,sel:o,price:p,ddr:d,color:c,uname:u,imgs:s}
          this.axios.get(url,{params:obj})
          .then(res => {
              console.log(res);
                if(res.data.code == -2){
                    this.$confirm("请登录");
                    this.$router.push("/Login")
                    }else{
                    this.$confirm("添加成功");
                    }
          })
      },
      handleChange (value) {
        console.log(value)
      },
      loadMore(){
            var url = "details";
            var obj = {lid:this.lid}
            this.axios.get(url,{params:obj}).then(res=>{
                var data=res.data.data;
                var col=[];
                for(var i=0;i<=data.length-1;i++){
                    col.push(data[i].price)
                }
                  this.col=col;  
                  this.list=data;
                  console.log(data);
                  
            })
       }, 
      img(){
           var url = "img";
           var obj = {lid:this.lid}
           this.axios.get(url,{params:obj}).then(res=>{ 
                this.imgs=res.data.data; 
                  console.log(res.data.data);
                  
            })
      }
    },
    components:{
    myNav
    }
}
</script>
<style scoped>
li{
    list-style: none;

}
a{
    text-decoration : none;
    color: #000;
}
button{
    border: 0px;
    outline:none;
}
.det{
    position: relative;
    width: 1200px;
    margin: 0 auto;
}
.Carousel{
    margin-left: 50px;
    margin-top: 30px;
    width: 500px;
    height: 560px;
}
.el-carousel__item h3 {
    color: #475669;
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
.right{
    position: absolute;
    width: 600px;
    left: 50%;
    top: 5%;
    
}
.xian{
    margin-top:20px ;
    margin-bottom: 20px;
    width: 650px;
    border: 0.3px solid rgb(172, 170, 170);
}
.right>p:first-of-type{
    color: #000;
    font-size: 25px;
    margin-top:20px ;
}
.right>p:nth-child(2){
    color: rgb(184, 181, 181);
    font-size: 13px;
}
.right>p:nth-child(3),.right>p:nth-child(4){
    color: #f40;
}
.right>p:nth-child(4){
    margin-bottom: 20px;
}
.right>p:nth-child(5){
    margin-top:100px; 
}
.right>p{
    margin-top: 10px;
}
.edition li,.color li{
    cursor:pointer;
    width: 280px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin-left: 20px;
    margin-top: 10px;
    background: #fff;
    border: 0.5px solid rgb(192, 188, 188);
}
.edition li{
     float: left;
}
.color li{
        float: left;
}
.orange{
    color: red;
    border: 1px solid #f40;
}
.price{
    width: 200px;
    height: 60px;
    font-size: 25px;
    margin-top: 20px;
    text-align: center;
    line-height: 60px;
}
.price>p{
    color: #f40;
}
.shop{
    margin-top: 20px;
    padding: 20px 100px;
    background: #f70;
    color: #fff;
    font-size: 18px;
}
.option1,.option2{
    margin-top:20px ;
    width: 650px;
    display: inline-block;
}
.edition .aa{
    background-color: #f40;
}
.color .aa{
    background-color: #f40;
}
.color>.bb:nth-child(1){
    background-color: #f40;
}
.imgs{
    width: 100%;
    height: 100%;
}
</style>