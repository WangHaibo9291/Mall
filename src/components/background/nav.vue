<template>
    <div>
      <div class="content">
          <h2>导航头</h2>
          <el-input class="user_p" v-model="ruleForm.name" placeholder="请输入产品名"></el-input>
          <el-input class="user_p" placeholder="请输入价格" v-model="ruleForm.price" ></el-input>
          <div class="imgs">
              <el-upload
              class="upload-demo"
              ref="upload"
              name="uname"
              :action="uploadURL"
              :limit='4'
              :data="ruleForm"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-success="uploadSuccess"
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
            name:'',
            price:'',
            subhead:'' 
        },
        uploadURL:'http://127.0.0.1:4000/public',
        fileList: []
      };
    },
    methods: {
      submitUpload() {
        location.reload();
        this.$refs.upload.submit(); 
      },
      uploadSuccess(res, file ,fileList) {
        
        if(res==-1){
          
        return this.$message("上传失败");
        }else{
        return this.$message("上传成功");
        }
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
  height: 460px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -230px;
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
.imgs{
  margin-top: 25px;
  margin-left:15px ;
}
.top{
  margin-top: 20px;
}
.upload-demo{
  width: 450px;
  height: 180px;
}
</style>
