<template>
    <div class="pages">
        <div class="line"></div>
        <div class="logo"><img src="../assets/images/logo_poc@2x.png" alt=""></div>
        <div class="loginMethod" >
            <div :class="isSelect===index?'items':'item'" v-for="(item,index) in List" :key='index' @click='clickLogin(item.title,index)' >
                {{item.title}}
            </div>
        </div>
        <!-- 账号蜜码登录 -->
            <passwordLogin v-if="isSelect==0"></passwordLogin>
            
        <!-- 短信验证码登录 -->
            <codeLogin v-if="isSelect==1"></codeLogin>
            

         <div class="agreement">
              <img  @click="switchTo" :src="click=='true'?require('../assets/images/check.png'):require('../assets/images/checks.png')" alt=""><div>登录即代表您同意<a href="#">《用户服务协议》</a><a href="#">《xxxxx》</a></div>
              
          </div>

            <div class="bottom">
                <div class="log-in" @click='login'>登录</div>
                <div class="register" @click="register">注册</div>
            </div>
          
    </div>
</template>
<script>

import passwordLogin from '@/components/passwordLogin'
import codeLogin from '@/components/codeLogin'
export default {
    data(){
        return{
            click:'true',
            
            isSelect:0,
            List:[
                {title:'账号密码登录'},
                {title:'短信验证码登录'}
            ],
            
            
        }
    },
    components:{
        passwordLogin,
         codeLogin
    },
    created:function(){
    //    console.log(setInterval(()=>{},1000))
    },
    
    methods:{
        clickLogin(title,index){
            console.log(title)
            this.isSelect=index;
          
        },
        //勾选协议
        switchTo(){
            
            if(this.click=='true'){
                    this.click='false'
            }else{
                this.click='true'
            }
        },
        
        // 登录
        login(){
             if(!this.userphone){
                console.log('手机号不能为空')
                    return false
            }
            if(!/^1[3|4|5|7|8]\d{9}$/.test(this.userphone)){
                console.log('手机号格式不正确');
                return false;
            }
            if(!this.password){
                console.log('密码不能为空')
                    return false
            }

        },
        // 注册
        register(){
            this.$router.push({path:'/register'})
        },
        // 忘记密码
        forget(){

        },
        
        
    }
}

</script>

<style lang="less" scoped>
.pages{
        .line{
        width: 750px;
        height:1px;
        margin-top: 40px;
        margin-bottom: 36px;
        background-color: #F6F6F6;
        }

        .logo img{
        width:140px ;
        height: 140px;
        border-radius: 24px;
        box-shadow: 0 4px 8px 0 ;
         }

    .loginMethod{
        margin-top: 41px;
        display: flex;
        padding:0 70px;

        .items{
         flex: 1;
        color: #9342CF ;
        text-align: center;
        font-size: 30px;
        font-family: NotoSansCJKsc-Medium;
        border-bottom: 3px solid #9342CF;
        padding-bottom: 28px;
        box-sizing: border-box;
                 }
        .item{
        flex: 1;
        color: #999999 ;
        text-align: center;
        font-size: 30px;
        font-family: NotoSansCJKsc-Medium;
        border-bottom: 3px solid #F8F8F8;
        padding-bottom: 28px;
        box-sizing: border-box;
            }
        }



    .agreement{
        height: 40px;
       display: flex;
        font-size: 24px;  
        padding-left: 75px;
        
        box-sizing: border-box;


        div{
            box-sizing: border-box;
             padding-left: 10px;
            line-height: 40px;
             color: #666666;
        }
        a{
            color:#9342CF;
        }
        img{
            width: 40px;
            height: 40px;
           }
     }
     .bottom{
          box-sizing: border-box;
         padding-left: 75px;
         padding-right: 75px;
         margin-top: 29px;

         .log-in{
        
         width: 600px;
         height: 78px;
         border:2px solid #A252F4;
         border-radius: 39px;
         background-image: linear-gradient(-180deg, #A252F4 0%, #9342CF 100%);
         text-align: center;
         line-height: 78px;
         color: #FFFFFF;
         font-size: 30px;
         margin-bottom: 24px;
                 }

        .register{
         
         width: 600px;
         height: 78px;
         border:2px solid #9342CF ;
         border-radius: 39px;
         color: #9342CF;
         font-size: 30px;
         text-align: center;
         line-height: 78px;
                    }
        }

}
    
    
    
    
    
    
    
    
    
    
    

    





  

   
      
     
    
    
     
     


</style>