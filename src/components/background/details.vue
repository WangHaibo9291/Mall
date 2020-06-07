<template>
    <div>
      <div class="content">
          <h2>管理</h2>
          <el-input class="user_p" placeholder="请输入序号" v-model="ruleForm.uid" ></el-input>
          <el-input class="user_p" v-model="ruleForm.name" placeholder="请输入产品名"></el-input>
          <el-input class="user_p" placeholder="请输入标题" v-model="ruleForm.title" ></el-input>
          <el-input class="user_p" placeholder="请输入价格" v-model="ruleForm.price" ></el-input>
          <el-input class="user_p" placeholder="请输入颜色" v-model="ruleForm.color" ></el-input>
          <el-input class="user_p" placeholder="请输入版本" v-model="ruleForm.ddr" ></el-input>
            <div class="imgs">
              <el-upload
              class="upload-demo"
              ref="upload"
              name="sss"
              :action="uploadURL"
              :limit='1'
              :data="ruleForm"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </div>
          <el-button class="top" style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
         ruleForm:{
            uid:'',
            name:'',
            title:'',
            price:'',
            color:'',
            ddr:''
          },
          uploadURL:'http://127.0.0.1:4000/det',
         fileList: []
      };
    },
    methods: {
      submitUpload() {
        location.reload();
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>
<style scoped>
body{
  position: relative;
}
.content{
  width: 500px;
  height: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -350px;
  margin-left: -250px;
   box-shadow:0 0 12px rgb(83, 80, 80);
  background-color:rgb(250, 250, 250); 
}
h2{
  text-align: center;
  margin-top:15px;
}
.user_p{
  margin-top: 20px;
  width: 470px;
  margin-left: 15px;
  margin-bottom: 10px;
}
.but{
  width: 150px;
  height: 40px;
  margin-top: 20px;
  margin-left: 20px;
}
.imgs{
   margin-top: 20px;
  width: 470px;
  margin-left: 15px;

}
.top{
  margin-top:100px ;
}
</style>
