<template>
    <div>
        <div class="header">
            <div class="navHeader">
                <a href="/"><img src="../assets/logo.jpg" alt=""></a>
                <span>我的购物车</span>
                <span class="span">温馨提示：商品是否购买成功，以最终下单为准，请尽快结算</span>
            </div>
        </div>
        <div class="shop">
            <ul class="tabHeader">
                <li><input type="checkbox" v-model="allcb" @change="selectAll"><span>全选</span></li>
                <li>商品名称</li>
                <li>单价</li>
                <li>数量</li>
                <li>小计</li>
                <li>操作</li>
            </ul>
            <ul class="tabBody" v-for="(item,i) of list" :key="i" >
                <li><input type="checkbox"  v-model="item.cb"  @change="changeitem"><img :src="'http://127.0.0.1:4000/'+item.imgs" alt=""> </li>
                <li>{{item.uname}} {{item.color}}</li>
                <li>¥{{item.price}}</li>
                <li>
                    <div>
                        <button @click="min(i)">－</button>
                        <input type="text" v-model="item.count" style="width: 20px;text-align: center;">
                        <button @click="max(i)">＋</button>
                    </div>
                </li>
                <li>¥{{item.price*item.count}}</li>
                <li @click="del(item.id)">×</li>
            </ul>
            <ul class="account">
                <li>{{$store.getters.getCart}}</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[],//购物车列表
            allcb:false,//选中项
        }
    },
    created() {
        this.loadMore();
    },
    methods: {
    delm(){
      //功能:删除选中商品
      //1:当前商品列表中长度0
      //2:提示:没有可以删除商品
      if(this.list.length==0){
        this.$messagebox("消息","当前没有可删除商品");
        return;
      }
      //3:拼接商品id字符串
      //4:创建变量str
      var str = "";
      //5:创建循环遍历商品,如果当前状态等于true 将id拼接str
      for(var item of this.list){
         if(item.cb){//选中
           str+=item.id+","
         }
      }
      //6:提示:请选择要删除商品
      if(str.length==0){
        this.$messagebox("消息","请选择需要删除商品");
        return;
      }
      //7:截取字符串 ,
      str = str.substring(0,str.length-1);
     //8:显示确认交互框
     this.$messagebox.confirm("是否删除数据?")
     .then(res=>{
     //9:创建变量url保存服务器程序地址
     var url = "delm"
     //10:创建变量obj多个id
     var obj = {id:str};
     //11:发送ajax请求并且获取返回结果
     this.axios.get(url,{params:obj}).then(res=>{
      //12:重新加载商品列表
      this.loadMore();
      //13:显示提示信息
      this.$toast("删除成功")
     })
     })
     .catch(err=>{
     })
    },
        changeitem(){
            console.log(2222);
            
            //功能:商品前复选状修改函数
            //1:获取商品列表数组长度
            var size = this.list.length;
            //2:计算选中状态商品几个
            var sum = 0;
            for(var item of this.list){
                //item.cb==true商品选中  
                if(item.cb)sum++;
                console.log(sum);
                
            }
            //3:如果商品选中数量与数组长度
            //  相同 全选 选中
            //  不相同 全选 清空
            if(size==sum){
                this.allcb=true;
            }else{
                this.allcb=false;
            }
            },
        min(i){
        this.list[i].count=this.list[i].count>1?this.list[i].count-1:1
        console.log(this);
        
        },
        max(i){
        this.list[i].count++;
        },
        selectAll(){
            console.log(1111);
            
            //功能:全选复选框
            //1:获取全选状态
            var cb = this.allcb;
            console.log(cb);
            
            //2:创建循环遍历商品列表
            //  将全选状态赋值商品列表项状态
            for(var item of this.list){
                item.cb = cb;
            }
        },
        del(id){
      //功能:发送请求完成删除商品任务
      //1:获取购物车商品id
      console.log(1);
      console.log(id);
      console.log(this);
      
      this.$confirm("是否删除指定商品?")
      .then(res=>{
      //3:如果用户选择 确认
      //4:创建变量url
      var url = "del";
      //5:创建变量obj
      var obj = {id}
      //6:发送请求
      this.axios.get(url,{params:obj}).then(res=>{
       //7:接收服务器返回数据
       if(res.data.code==1){
        //8:提示删除成功
        this.$confirm("删除成功");
        //9:重新加载购物车商品列表
        this.loadMore();
       }
      })
      })
      .catch(err=>{
        console.log(err);
      })
      
    },
        loadMore(){
       var url = "findcart";
       this.axios.get(url)
        .then(res => {
            console.log(res);
            var list=res.data.data;
            this.list=list;
        })
        }
    },
}
</script>
<style scoped>
li{
    list-style: none;
}
.header{
    height: 100px;
    border-bottom: 3px solid #f40;
}
.navHeader{
    position: relative;
    width: 1200px;
    height: 100px;
    margin: 0 auto;
    line-height: 150px;
}
.navHeader>a>img{
    width: 55px;
    height: 55px;
}
.navHeader span{
     position: absolute;
     top: -20px;
     left: 100px;
}
.navHeader>span:first-of-type{
    font-size: 30px;
}
.navHeader>.span{
    margin-left:160px; 
    margin-top:8px; 
    font-size: 12px;
    color: rgb(163, 163, 162);
}
.shop{
    position: relative;
    width: 1200px;
    top:40px ;
    margin: 0 auto;
    background-color: rgba(241, 240, 240, 0.918);
}
.shop>.tabHeader{
    height: 70px;
    display: flex;
    border-bottom: 2px solid rgba(194, 193, 192, 0.884);
    line-height: 70px;
}
.tabHeader>li:nth-child(1){
    width: 200px;
}
.tabHeader>li:nth-child(1)>input{
    width: 18px;
    height: 18px;
    margin-left:20px ;
}
.tabHeader>li:nth-child(1)>span{
    position: absolute;
    top: -3px;
    left: 40px;
}
.tabHeader>li:nth-child(2){
    width: 400px;
}
.tabHeader>li:nth-child(3){
    width: 150px;
}
.tabHeader>li:nth-child(4){
    width: 150px;
}
.tabHeader>li:nth-child(5){
    width: 150px;
}
.tabHeader>li:nth-child(6){
    width: 150px;
}
.tabBody>:nth-child(1){
    width: 200px;
}
.tabBody{
    position: relative;
    display: flex;
}
.tabBody>:nth-child(1)>input{
    position: absolute;
    width: 18px;
    height: 18px;
    top: 50px;
    left: 20px;
    
}
.tabBody>:nth-child(1)>img{
    margin-left: 40px;
    width: 120px;
    height: 80px;
    margin-top:20px ;
}
.tabBody>:nth-child(2){
    width: 400px;
    line-height: 110px;
}
.tabBody>:nth-child(3){
    width: 150px;
    line-height: 110px;
}
.tabBody>:nth-child(4){
    width: 150px;
    line-height: 110px;
}
.tabBody>:nth-child(5){
    width: 150px;
    line-height: 110px;
}
.tabBody>:nth-child(6){
    width: 150px;
    line-height: 110px;
    cursor:pointer;
}
</style>