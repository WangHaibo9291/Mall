<template>
  <div class="superuser">
    <div class="user">
      <h2>登录</h2>
      <el-input class="user_u" v-model="uname" placeholder="请输入内容"></el-input>
      <el-input class="user_p" placeholder="请输入密码" v-model="upwd" show-password></el-input>
      <div class="input">
        <router-link to="/register" class="input_m">注册</router-link>
        <router-link to="/register" class="input_r">忘记密码</router-link>
      </div>
      <el-button class="button" type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
   data() {
    return {
      uname: '',
      upwd: ''
    }
  },
  methods:{
    login(){
        var u = this.uname;
        var p = this.upwd;
        var reg = /^[a-z0-9]{3,12}$/i;
        //*4:用户验证失败 提示短消息
        if(!reg.test(u)){
           this.$message("用户名格式不正确");
           return;
        }
        //*5:密码验证失败 提示短消息
        if(!reg.test(p)){
          this.$message("密码格式不正确");
          return;//失败停止执行
        }  
        //6:发送ajax 请求 axios
        var url = "login";
        var obj = {uname:u,upwd:p}
        this.axios.get(url,{params:obj}).then(res=>{ 
       //7:获取服务器返回结果
       //7.1:登录失败  提示
      if(res.data.code==-1){
       this.$message("用户名和密码有误");
      }else{
       //7.2:登录成功  跳转商品首页组件
       console.log(res);
       
       this.$router.push("/");
      }
      })
      }
    }
}
</script>
<style scoped>
.superuser{
  position: relative;
  width: 100%;
  height: 600px;
  background:url('../assets/login.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top:5% ;
} 
.input{
  width: 280px;
  height: 20px;
  margin: 0 auto;
 
}
.input_r,.input_m{
  float: left;
   text-decoration: none;
}
.input_m{
  float:right;
}
h2{
  text-align: center;
  margin: 0 auto;
  margin-top: 25px;
}
.user{
  width: 350px;
  height: 350px;
  text-align: center; 
  position:absolute;
  top: 50%;
  left: 75%;
  margin-top: -150px;
  margin-left: -175px;
  box-shadow:0 0 12px rgb(83, 80, 80);
  background-color:rgb(250, 250, 250); 
}
.user_u,.user_p,.button{
  width: 280px;
  margin-top: 45px; 
}
</style>