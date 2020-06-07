<template>
  <div>
    <div class="header">
        <div class="nav">
          <div class="navLeft">
            <div><router-link to="/">商城</router-link></div>
            <div><router-link to="/goods" >MIUI</router-link></div>
            <div><router-link to="/goods">loT</router-link></div>
            <div><router-link to="/manage">云服务</router-link></div>
            <div><router-link to="/det">金融</router-link></div>
            <div><router-link to="/Imgs">有品</router-link></div>
            <div> <router-link to="/goods">小爱开放平台</router-link></div>
            <div><router-link to="/goods">手机</router-link></div>
            <div><router-link to="/goods"></router-link></div>
            <div><router-link to="/goods"></router-link></div>
          </div>
          <div class="navRight">
            <div> <router-link to="/login">登录</router-link></div>
            <div><router-link to="/register">注册</router-link></div>
            <div><router-link to="/vehicle">购物车</router-link></div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .header{
    width: 100%;
    background-color:#333333; 
  }
  .nav{
    width: 1200px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    justify-content:space-between ;
  }
  a,.ggd{
    text-decoration: none !important;
    line-height: 40px;
    color: #b0b0b0 !important;
    font-size: 12px !important;
  }
  .navLeft>div{
    float:left;
    margin-right:10px;
  }
  .navRight>div{
    float:left;
    margin-left:10px;
  }
</style>