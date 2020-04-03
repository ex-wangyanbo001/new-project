<template>
    <div class="pages">
        <div>
            老虎不吃人
        </div>
        <div ref='datas' class="float" :class='isSelect?"float":(sliding?"floats":"floatt")' v-show="float">
            <div @click="Floats">
                <div class="float-title">i康宝.重疾</div>
                <div class="float-cneter">
                    <div class="float-text">热卖</div><div class="float-describe">门诊+住院最高报销200万</div>
                </div>
            </div>
            
            <div class="float-buttom" @click="floatHidden">></div>
        </div>

        <div class="insurance">
            <div class="insurance-top">
                <div class="img"></div>
                <div class="insurance-information">
                    <div class="text"><div>热卖</div><div class='information-title'>i康宝.重疾</div></div>
                    <div class="text"><div>特色</div><div class="information-title">门诊+住院最高报销400万</div></div>
                </div>
            </div>
            <div class="insurance-buttom">
                <div class="money-left"><span>低至￥<span>{{20}}</span>元起</span></div>
                <div class="click-buttom" @click="buttoms">立即获取保障></div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            float:false,
            isSelect:true,
            sliding:'',
            timer: null,
            scrollT: 0,
            stopscroll: 0
            
        }
    },
    created(){
        
        this.float=true
    },
    mounted(){
         
        window.addEventListener('scroll',this.handleScroll
        //  ()=>{console.log('滚动中')}
        , false);
    },
    // destroyed(){
    //     window.removeEventListener('scroll',this.handleScroll, false);
    // },
    
    methods:{
        
        floatHidden(){
            this.float=false
            
        },
        Floats(){
            this.$router.push({path:'/yh'})

        },
        
        handleScroll(){
           this.isSelect=false
           console.log(this.$refs.datas)
            this.sliding=true
            clearTimeout(this.timer);//清除定時器
            this.timer = setTimeout(this.ScrollEnd,1000);

           this.scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        },
        ScrollEnd() {
            this.stopscroll = document.documentElement.scrollTop || document.body.scrollTop;//獲取滾動停止后的scrolltop
            if (this.stopscroll == this.scrollT) {
                console.log("滚动已结束");
                this.isSelect=false
                this.sliding=false
            }
        },

        // 点击返回按钮返回上一页面
        // this.$router.go(-1)

        buttoms(){
            //点击立即获取保障，跳转对应保险详情页
        }
    }
}
</script>
<style lang="less" scoped>
        .pages{
            width: 750px;
            height:120vh;
            
            position: relative;
            .floats {
               
             animation: move 5s;   
            @keyframes move{
				from {
                        opacity: 1;
                    }
                    to {
                        opacity: 0;
                    }
                }
            }
           .floatt{
                animation: moves 5s;
            @keyframes moves{
				from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
           }
			

           .float{
               color: white;
               font-size: 26px;
               position: absolute;
               top: 200px;
               right: 0;
               width: 450px;
               height: 140px;
               background: #cccccc;
               border-radius: 55px 0 0 55px;
               display: flex;
               justify-content: space-around;
               align-items: center;
            
               .float-buttom{
                   font-size: 45px;
               }
               
               .float-buttom{
                   width: 50px;
                   height:100px;
                   text-align: center;
                   line-height: 100px;

               }
           } 
            .float-cneter{
                   display: flex;
                   padding-top: 20px;
                   box-sizing: border-box;
                   .float-text{
                       margin-left: 10px;
                       background:#cccccc;
                   }
                   .float-describe{
                       padding-left: 10px;
                        box-sizing: border-box;

                   }
               }
           .insurance{
               width: 720px;
               height: 400px;
               margin-top: 400px;
               margin-left: 15px;
               margin-right: 15px;
               border: 1px solid black;
               border-radius: 5px;
             .insurance-top{
                 padding-top: 20px;
                 padding-left: 20px;
                 display: flex;
                 
                 .img{
                     
                     width: 300px;
                     height: 200px;
                     border: 1px solid black;
                 }
                 .insurance-information{
                     padding-top: 20px;
                    //  display: flex;
                    flex: 1;
                    height: 200px;
                    .text{
                        display: flex;
                        padding-left: 20px;
                        
                        .information-title{
                            padding-left: 30px;
                            // line-height: 100px;
                        }
                    }
                 }
             }
             .insurance-buttom{
                 padding-top: 100px;
                //  width: 200px;
                height: 60px;
                 display: flex;
                 justify-content: space-around;
                 .money-left{
                     line-height: 60px;
                     margin-left: -90px;
                 }
                 .click-buttom{
                     width: 200px;
                     height: 60px;
                     line-height: 60px;
                     text-align: center;
                     border: 1px solid black;
                     border-radius: 25px;
                     margin-right: -80px;
                 }
             }
           }
           .insurance-information :nth-child(1){
            //    padding-top: 10px;
               padding-bottom: 50px;
           }
        }
</style>