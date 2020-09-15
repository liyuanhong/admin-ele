<template>
  <div class="login_page" :style='{"background":backgroundPic,"height":"100vh"}' style="position:absolute;width:100%;">
    <div style="width:65%;height:100vh;_background:pink;float:left;">
      <div style="width:100%;height:180px;_background:red;">
        <h1 style="margin:0px;font-size:48px;padding-top:50px;_color:black;">测试工具平台</h1>
      </div>
    </div>
    <div style="height:100vh;width:35%;_background:yellow;float:left;">
      <div style="width:380px;height:330px;background:#0D8BAC;margin:auto;margin-top:150px;border-radius: 5px;padding-top:50px;">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin-top:60px;width:90%;">
          <el-form-item label="用户名：" prop="username">
            <el-input v-model.number="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码：" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登 录</el-button>
            <el-button @click="resetForm('ruleForm')">重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginPage',
  data(){
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    var bac_url = "url(http://" + window.location.host + "/pic/login_bac.jpg)";
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        username: ''
      },
      backgroundPic: bac_url,
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>
.el-form-item__label {
  color: black !important;
  font-weight: bold;
}
</style>
