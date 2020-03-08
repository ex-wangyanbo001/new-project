<template>
  <div  class="password-login">
    <div class="phone-number">
      <img src="../../../assets/images/phone.png" alt />
      <input type="text" placeholder="请输入手机号" v-model="userphone" />
    </div>
    <div class="user-password">
      <img class="img-one" src="../../../assets/images/passwords.png" alt />
      <input :type="passwordType" placeholder="请输入密码" v-model="password" />
      <img class="img-two" @click="passwordHandle" :src="passwordType=='password'?require('../../../assets/images/password.png'):require('../../../assets/images/ic_show.png')" alt />
    </div>
    <div @click="forget" class="forget">忘记密码?</div>
  </div>
</template>
<script>

export default {
  data() {
    return {
        
      userphone: "",
      password: "",
      passwordType:'password',
      
    };
  },
  methods: {
    login(){
            console.log('我是密码登录的login方法')
            this.$router.push('/comm')
        },
      //忘记密码
      forget(){
        console.log('点击了forget')
        this.$parent.setisselect(1)
      },
      //密码显示或隐藏
        passwordHandle(){
            if(this.passwordType=='password'){
                this.passwordType='text'
            }else {
                this.passwordType='password'
            }
            
        }
  }
};
</script>

<style lang="less" scoped>
.password-login {
  padding-top: 28px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 232px;
  box-sizing: border-box;
  .phone-number {
    width: 690px;
    height: 90px;
    border-radius: 10px;
    background: #ffffff;
    border: 2px solid #dddddd;
    margin-bottom: 20px;
    line-height: 90px;
    padding-left: 36px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
    }
    input {
      flex: 1;
      height: 100%;
      font-size: 30px;
      color: #999999;
      padding-left: 25px;
      border: none;
      outline: medium;
      box-sizing: border-box;
      &::placeholder {
        color: #f3f3f3;
      }
    }
  }

  .user-password {
    width: 690px;
    height: 90px;
    border-radius: 10px;
    background: #ffffff;
    border: 2px solid #dddddd;
    padding-left: 36px;
    padding-right: 30px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    input {
      //    width: 590px;
      flex: 1;
      height: 100%;
      font-size: 30px;
      color: #999999;
      padding-left: 25px;
      box-sizing: border-box;

      border: none;
      outline: medium;
      &::placeholder {
        color: #f3f3f3;
      }
    }
    .img-one {
      width: 40px;
      height: 40px;
      // vertical-align:middle;
    }
    .img-two {
      width: 35px;
      height: 20px;
    }
  }
  .forget{
        text-align: right;
        font-family: NotoSansCJKsc-Regular;
        margin-top: 17px;
        color:22px ;
        font-size:#999999;

  }
}
</style>