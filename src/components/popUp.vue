<template>
<div class="pages" v-show='show'>


    <div class="pop-up">
        <img src="../assets/images/img_te.png" alt="">
        <div class="text">
            Answer 1 more questions to get exclusive funding opportunities . Are you sure you want to give up?
        </div>
        <div class="button" >
            <div class="btn" @click='Giveup'>Give up</div>
            <div class="btns" @click='Continue'>Continue</div>
            
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
           show:'true' ,
        }
    },
    methods:{
        Giveup(){
        this.$router.push({path:'/login'})
        
        console.log('离开 //、、、、离开 应该是离开填写页面  让他去到首页')

        },
        Continue(){
            this.show=false
            
            console.log('继续 //。。。。继续的话 关闭弹窗 返回刚才的页面继续填写')
        }
    }
}
</script>

<style lang="less" scoped>
.pages{
    padding-top: 30%;
}
    .pop-up{
        width: 580px;
        // height: 474px;
        background: #FFFFFF;
        border-radius: 10px;
        border:1px solid pink;
        margin: 0 auto;
        padding-top: 28px;
        box-sizing: border-box;
        
        img{
            
          
            width: 235px;
            height: 162px;
        }
        .text{
            padding:28px 30px 68px 30px;
            box-sizing: border-box;
            
            font-size: 28px;
            font-family: Roboto-Regular;
            color: #222222;
            text-align: center;
            line-height: 36px;
        }
        .button{
            display: flex;
            border-top:2px solid #E7E7E7;
            width: 580px;
            height: 80px;
        }
        .btn{
           width: 288px;
           height: 100%;
           
            font-family: Roboto-Regular;
            font-size: 30px;
            color: #666666;
            text-align: center;
            line-height: 80px;
        }
        .btns{
            width:290px; 
            height: 100%;
            background: #FC5988;
            border-radius: 0 0 10px 0;
            font-family: Roboto-Medium;
            font-size: 30px;
            color: #FFFFFF;
            text-align: center;
            line-height: 80px;
        }
    }
</style>