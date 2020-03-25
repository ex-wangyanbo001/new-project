<template>
    <div class="box" v-show='show'>
        <div class='pages'>

        
        <div class="page">
            <div class="title">
                <img src="@/assets/images/img_zhuangshi.png" alt="">
                <div class="text">Congratulations on getting a maximum loanable amount of  
                        <span class="money">10,000PHP</span>
                </div>
            
            </div>

            <div class="center-title">Note: The following are provided by partners</div>
            <div class="bottom">
                    <div class="cash">10,000₱</div>
                    <div class="cash-bottom">Loan Amount</div>
                    <div class="times">
                        <div class="time-text">Expiry Date:</div> <div class="time">{{h}}:{{m}}:{{s}}</div>
                    </div>
                    <div class="info-one"> 
                        Loan Term：61-180Dsys
                    </div>
                    <div class="info-two">
                        Daily Interest：0.03%
                    </div>
                    <div class="info-three">
                        Process：60mins
                    </div>
                    <img src="@/assets/images/img_qian@2x.png" alt="">
                    <div class="btn" @click="butom">loan</div>
            </div>

            <div @click="showHidden"  class="base"><img src="@/assets/images/ic_gb@2x.png" alt=""></div>
        </div>
        </div>
    </div>
</template>

<script>

let inteval=null;

export default {
    data(){
        return{
            show:'true',
            leftTime:'',
            
            h:'',
            m:'',
            s:''
        }
    },
    created(){
             //执行倒计时
                this.countDown()

          },
    destroyed:function(){
            inteval&&clearInterval(inteval)
    },
    methods:{
        showHidden(){
            this.show=false;
        },
        butom(){
            console.log('点我何事？')
        },
        countDown(){
                
              let leftTime=18000

                 

                inteval&&clearInterval(inteval)
                inteval=setInterval( ()=>{
                       if (leftTime >= 0) {
                            // console.log(leftTime)
                     let d = Math.floor(leftTime/ 60 / 60 / 24);

                     let hour= Math.floor(leftTime/ 60 / 60 % 24);
                     if(hour<10){
                            this.h ='0'+ Math.floor(leftTime/ 60 / 60 % 24);
                     }else{
                         this.h = Math.floor(leftTime/ 60 / 60 % 24);
                     }
                    
                    let min=Math.floor(leftTime/ 60 % 60);
                     if(min<10){
                        this.m = '0'+Math.floor(leftTime/ 60 % 60)
                    }else{
                       this.m =  Math.floor(leftTime/ 60 % 60)
                    };

                    let second= Math.floor(leftTime % 60);
                    if(second<10){
                             this.s ='0'+ Math.floor(leftTime % 60);
                    }else{
                             this.s = Math.floor(leftTime % 60);
                    }
                   
                    // console.log(Math.floor(leftTime / 1000 / 60 / 60 % 24), Math.floor(leftTime / 1000 / 60 % 60),Math.floor(leftTime / 1000 % 60))
                }
                    
                      leftTime--
                       
                        if(leftTime==0){
                            //    this.dataTime='可重新申请'
                               inteval&&clearInterval(inteval)
                        }
                },1000)
        },
    }
}
</script>

<style lang="less" scoped>
.box{
    
    width: 750px;
    // height: 1334px;
    // 
   
    .pages{
         box-sizing: border-box;
        padding-top: 199px ;
        padding-left: 85px;
        padding-right: 85px;
        width: 750px;
        height:100vh;
        background: gray;
        
    }
    .page{
        
        width: 580px;
        height: 808px;
        background: #FFFFFF;
        border-radius: 20px;
       .title{
           width: 580px;
           height: 180px;
           background: #9943C9;
            border-radius: 20px 20px 0 0;
           padding-top: 21px;
           padding-left: 28px;
           padding-bottom: 23px;
           box-sizing: border-box;
           position: relative;
           .text{
               text-align: left;
               font-family: Roboto-Regular;
                font-size: 32px;
                color: #FFFFFF ;
                line-height: 44px;
                padding-bottom: 6px;
                box-sizing: border-box;
                position: absolute;
                z-index: 1;
                
           }
           .money{
               font-family: Roboto-Bold;
                font-size: 36px;
                color: #FFF26C;
                text-align: left;
              }
             img{
                 width: 417px;
                 height: 117px;
                 position: absolute;
                 left: 225px;
                 bottom: 75px;
                //  opacity: 0.8;
             } 
       }

       .center-title{
            padding: 25px 28px 25px 28px;
            font-family: Roboto-Regular;
            font-size: 20px;
            color: #666666;
            box-sizing: border-box;
          }
       .bottom{
          margin-left: 28px;
           background-image: linear-gradient(-180deg, #9741C8 0%, #AE61D9 100%);
            border-radius: 8px;
           width:524px;
           height: 520px;
           padding-left: 28px;
           
           padding-bottom: 34px;
           box-sizing: border-box;
           text-align: left;
           position: relative;
        .cash{
            padding-top: 35px;
            padding-bottom: 30px;
           font-family: Roboto-Bold;
            font-size: 80px;
            color: #FFFFFF;
             }
         .cash-bottom{
             padding-left: 14px;
             opacity: 0.7;
            font-family: Roboto-Regular;
            font-size: 20px;
            color: #FFFFFF;
            padding-bottom: 18px;
           box-sizing: border-box;

         }     
           
         .times{
                background: #FFF483;
                border-radius: 6px;
                width: 354px;
                height: 44px;
                display: flex;
                margin-bottom: 20.5px;
            .time-text{
                font-family: Roboto-Regular;
                font-size: 26px;
                color: #FA4E44;
                line-height: 44px;
                padding-left: 14px;
                padding-right: 25px;
                box-sizing: border-box;
                 }
             .time{
                    font-family: Roboto-Bold;
                    font-size: 32px;
                    color: #FA4E44;
                    line-height: 44px;
             }    
                
         } 
         .info-one{
                height: 44px;
                // width: 272px;
               font-family: Roboto-Regular;
                font-size: 22px;
                color: #FFFFFF;
                line-height: 44px;
                padding-left: 14px;
                
                margin-right: 180px;
                box-sizing: border-box;
                background: #9741C8;
                border-radius: 6px;
            } 
            .info-two{
                height: 44px;
                // width: 272px;
               font-family: Roboto-Regular;
                font-size: 22px;
                color: #FFFFFF;
                line-height: 44px;
                padding-left: 14px;
                margin-bottom: 11px;
                margin-top: 11px;
                margin-right: 220px;
                box-sizing: border-box;
                background: #9741C8;
                border-radius: 6px;
            } 
            .info-three{
                height: 44px;
                // width: 272px;
               font-family: Roboto-Regular;
                font-size: 22px;
                color: #FFFFFF;
                line-height: 44px;
                padding-left: 14px;
                
                margin-top: 11px;
                margin-right: 260px;
                box-sizing: border-box;
                background: #9741C8;
                border-radius: 6px;
            }
          .btn{
              width:430px ;
              height: 76px;
              background: #FFFFFF;
                border-radius: 40px;
                font-family: Roboto-Bold;
                font-size: 34px;
                color: #9342CF;
                line-height: 76px;
                text-align: center;
                margin-top: 31px;
                margin-left: 19px;
          }
          img{
              width: 161px;
              height: 80px;
              position: absolute;
              left: 349px;
              bottom: 141px;
              
          }
       }
         .base{
        img{
            margin-top: 60px;
            width: 70px;
            height: 70px;
        }
    }
    }
    
}
    
</style>