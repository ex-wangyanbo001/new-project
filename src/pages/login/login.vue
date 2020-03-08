<template>
    <div class="pages">
        <div class="line"></div>
        <div class="logo"><img src="../../assets/images/logo_poc@2x.png" alt=""></div>
        <div class="loginMethod" >
            <div :class="isSelect===index?'items':'item'" v-for="(item,index) in List" :key='index' @click='clickLogin(item.title,index)' >
                {{item.title}}
            </div>
        </div>
        <!-- 账号蜜码登录 -->
            <passwordLogin ref='passwordLogin' v-if="isSelect==0"></passwordLogin>
            
        <!-- 短信验证码登录 -->
            <codeLogin ref='codeLogin' v-if="isSelect==1"></codeLogin>
            

         <div class="agreement">
              <img  @click="switchTo" :src="click=='true'?require('../../assets/images/check.png'):require('../../assets/images/checks.png')" alt=""><div>登录即代表您同意<a href="#">《用户服务协议》</a><a href="#">《xxxxx》</a></div>
              
          </div>

            <div class="bottom">
                <div class="log-in" @click='login'>登录</div>
                <div class="register" @click="register">注册</div>
            </div>
          
    </div>
</template>
<script>

import passwordLogin from '@/pages/login/components/passwordLogin'
import codeLogin from '@/pages/login/components/codeLogin'
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
     beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    },
    beforeRouteUpdate (to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
         console.log(this)
    },
    beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
         console.log(this)
    },
    
    methods:{
        setisselect(num=0){
            this.isSelect=num;
            
        },




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
            if(this.isSelect==0){
                console.log(this.$refs.passwordLogin,11111111)
                this.$refs.passwordLogin.login()
            }
            if(this.isSelect==1){
                 console.log(this.$refs.codeLogin,22222)
                 this.$refs.codeLogin.login()
            }
            

        },
        // 注册
        register(){
            this.$router.push({path:'/register'})
            console.log('我是yh改动test')
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