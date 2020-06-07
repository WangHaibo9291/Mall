<template>
    <div>
        <div class="center">
         <el-breadcrumb separator-class="el-icon-arrow-right" class="cen">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a :href="'/show/'+lid">全部结果</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
         </el-breadcrumb>   
        </div>
        <div class="show">
            <div class="show-1" v-for="(item,i) of list" :key="i">
                <div class="show-2">
                   <img :src="'http://127.0.0.1:4000/'+item.imgs" alt="图片"> 
                   <p>{{item.uname}}</p>
                   <p>{{item.price}}元</p>
                   <div>
                        <el-button type="primary" class="btn"><a :href="'http://localhost:8080/details/'+item.fid" class="aa">查看详情</a></el-button>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["lid"],
    data() {
        return {
            list:{},
        }
    },
    created(){
     this.loadMore();
    },
    methods: {
        loadMore(){
            console.log(this.lid);
            
            var url = "details";
            var obj = {lid:this.lid}
            this.axios.get(url,{params:obj}).then(res=>{
                var data=res.data.data;
                  console.log(data);
                  this.list=data;
                  
            })
       }, 
    },
}
</script>
<style scoped>
.center{
    width: 1200px;
    height: 30px;
    margin: 0 auto;
    margin-top:50px ;
}
.center>.cen{
    line-height: 30px;
    background-color: rgb(226, 222, 222);
}
.show{
    width: 1220px;
    margin: 0 auto;
    margin-top:20px ;
}
.show-1{
    width: 285px;
    height: 360px;
    margin-right:20px ;
    margin-top:20px ;
    background-color: rgb(243, 239, 239);
    float: left;
    position: relative;
}
.show-2{
    position: absolute;
    top: 10%;
    left: 50%;
    margin-left: -130px;
}
.show-2>img{
    width: 270px;
    height: 180px;
}
.show-2>p{
    margin-top:20px ;
    text-align: center;
}
.show-2>p:nth-child(3){
    color:#f40;
}
.btn{
    margin-top: 10px;
   margin-left:90px;
}
.aa{
    text-decoration: none;
    color: #000;
}
</style>