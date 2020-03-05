<template>
    <div class="page">
        <div class="phone">
                <img src="../assets/images/phone.png" alt="">
                <input type="text"  placeholder="请输入手机号码" v-model="userphone">
                <div class="auth-code" @click='authCode'>{{counttime}}</div>
            </div>
            <div class="auth">
                 <img class="imgs-one" src="../assets/images/authcode.png" alt="">
                  <input type="text" placeholder="请输入验证码" v-model="codeDemo">
                 
            </div>
            <div class="no-receive">收不到验证码？点击获取<span @click="voiceCode">语音验证码</span></div>
    </div>
</template>
<script>
let inteval=null;
export default {
    data(){
        return{
            counttime:"获取验证码",
            userphone: "",
            codeDemo:''
        }
    },
    destroyed:function(){
            inteval&&clearInterval(inteval)
    },
    methods:{
            //获取语音验证码
            voiceCode(){

            },

            // 获取验证码
            authCode(){
           
            if(!this.userphone){
                console.log('手机号不能为空')
                    return false
            }
            if(!/^1[3|4|5|7|8]\d{9}$/.test(this.userphone)){
                console.log('手机号格式不正确');
                return false;
            }

               this.counttime=10;
                
                inteval&&clearInterval(inteval)
                inteval=setInterval(()=>{
                         this.counttime--
                        if(this.counttime==0){
                               this.counttime='重新发送'
                               inteval&&clearInterval(inteval)
                        }
                },1000)
          }
    }
    
}
</script>
<style lang="less" scoped>
    .page {
            padding-top: 28px;
            padding-left: 30px;
            padding-right: 30px;
            box-sizing: border-box;
          .phone{
            width: 690px;
            height: 90px;
            border-radius: 10px;
            background:#FFFFFF ;
            border:2px solid #DDDDDD; 
            margin-bottom: 20px;
            box-sizing: border-box;
            padding-left: 36px;
            display: flex;
            align-items: center;
            input{
               flex:1;
               height: 100%;
               font-size: 30px;
               color: #999999;
               padding-left:25px;
               box-sizing: border-box;
               border: none;
               outline:none;
               &::placeholder{
                color: #f3f3f3;
            }

           } 
            .auth-code{
                width: 154px;
                // flex:1;
                height: 60px;
                font-size: 24px;
                color: #FFFFFF;
                background-color:#9342CF;
                border-radius: 6px;
                text-align: center;
                line-height: 60px;
                // display: inline-block;
                margin-right: 18px;
            }
             img{
                width: 40px;
                height: 40px;
               
            }
            }  

            .auth{
            width: 690px;
            height: 90px;
            border-radius: 10px;
            background:#FFFFFF ;
            border:2px solid #DDDDDD;
            padding-left: 36px;
            box-sizing: border-box;
            margin-bottom: 17px;
           display: flex;
           align-items: center;
             input{
            //    width: 590px;
            flex:1;
                height: 100%;
               font-size: 30px;
               color: #999999;
               padding-left:25px;
                box-sizing: border-box;

               border: none;
               outline:medium;
               &::placeholder{
                color: #f3f3f3;
            }
           } 
           .imgs-one{
                width: 40px;
                height: 40px;
               }
            .imgs-two{
                    width:35px ;
                    height:20px;
                     }
            }
    // 收不到验证码
    .no-receive{
        // padding-left: 325px;
        text-align: right;
        padding-bottom: 233px;
        box-sizing: border-box;
        span{
            color: #9342CF;
            text-decoration: underline;
        }
        
    }
    }
</style>