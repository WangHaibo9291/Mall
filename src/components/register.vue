<template>
<div>
  <div class="super1">
    <div class="enroll">
       <h1>注册</h1>
        <el-input class="enroll_a" v-model="uname" placeholder="请输入用户名"></el-input>
        <el-input class="enroll_a" placeholder="请输入密码" v-model="upwd1" show-password></el-input>
        <el-input class="enroll_a" placeholder="请输入密码" v-model="upwd" show-password></el-input>
        <el-input class="enroll_a" v-model="phone" placeholder="请输入手机号"></el-input>
        <el-input class="enroll_a" v-model="email" placeholder="请输入邮箱"></el-input>
        <div class="checkbox">
          <el-radio class="enroll_x" v-model="radio" label="1">男</el-radio>
          <el-radio class="enroll_y" v-model="radio" label="2">女</el-radio>
        </div>
        <el-button class="enroll_a" type="primary" @click="signIn">注册</el-button> 
    </div> 
  </div>
</div>
</template>
<script>
export default {
      data() {
      return {
        uname:'',
        upwd1: '',
        upwd: '',
        checkbox:1,
        email:"",
        phone:"",
        radio:'1'
      }
    },
    methods:{
    signIn(){
      var u=this.uname;
      var p=this.upwd;
      var p1=this.upwd1;
      var em=this.email;
      var ph=this.phone;
      var ra=this.radio;
      var reg=/^[a-z0-9]{3,12}$/i;
      var ar=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      var dh=/^1(3|4|5|6|7|8|9)\d{9}$/;
        if(!reg.test(u)){
          this.$message("用户名长度3~12位");
          return;
        }
        if(!reg.test(p)){
          this.$message("密码长度3~12位");
          return;
        }
        if(p!=p1){
          this.$message("两次输入密码不一致");
          return;
        }
        if(!dh.test(ph)){
          this.$message("输入手机号错误");
          return;
        }
        if(!ar.test(em)){
          this.$message("邮箱格式错误");
          return;
        }
        var url="register"
        var obj={uname:u,upwd:p,phone:ph,email:em,gender:ra};
        this.axios.get(url,{params:obj}).then(res=>{ 
          if(res.data.code==-1){
              this.$message("注册成功");
          }else{
              this.$router.push("/login")
          }
        })
      }
    }
}
</script>
<style scoped>
.enroll{
  position: absolute;
  width: 380px;
  height: 450px;
  box-shadow:0 0 12px rgb(83, 80, 80);
  text-align: center;
  top:50%;
  left: 50%;
  margin-top:-225px;
  margin-left:-190px; 
}
.enroll_a ,.checkbox{
  width: 260px;
  margin-top:15px ;
  text-decoration: none;

 }
</style>