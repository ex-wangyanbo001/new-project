<template>
    <div class="pages" >
        <div class="videoss">
            <div class="videos">
                <img src="../assets/images/videoplay.png" alt="" id="imgs">
                 <video  id="videoo" src="../assets/images/1584.mp4"  x-webkit-airplay="allow" x5-video-player-type="h5"  x5-video-player-fullscreen="true"></video>
            </div>
           
            <div class="name_title">
                <div class="nickname">{{nickname}}</div>
                <div class="video_title">{{video_title}}</div>
            </div>
            <div class="areas" @click="logins">
                <div class="give_like">
                    <img src="../assets/images/icyxz.png" alt=""><div class="text">{{giveNumber!=0?giveNumber:'点赞'}}</div>
                </div>
                <div class="comments">
                    <img src="../assets/images/icyxz.png" alt=""><div class="text">{{commentsNumber!=0?commentsNumber:'评论'}}</div>
                </div>
                <div class="collection">
                    <img src="../assets/images/icyxz.png" alt=""><div class="text">收藏</div>
                </div>
            </div>
        </div>
        


        <!-- <div class="topad"> -->
		       <div class="topad_center">
                    <img src="../assets/images/icwxz.png" alt="">
                    <div class="i-title">打开平安健康APP,观看更多专业视频</div>
					<div class="down"><a href="javascript:;" @click="evokeApp" class="i-button">打开看看</a></div>
                </div>
		<!-- </div>	 -->
    </div>
</template>
<script>

export default {
    data(){
        return{
           nickname:'@保险规划师', 
           video_title:'为什么要买保险为什么要买保险为什么要买保险',
           imgs:'',
           videoo:'',
           giveNumber:'12532',
           commentsNumber:'11255'

        }
    },
    mounted(){
        this.plays(),
        this.givenumber()
        this.commNumber()
    },
    methods:{

        //点赞评论 显示人数
        givenumber(){
               let giveNumber=this.giveNumber
                if(giveNumber>=10000){
                    this.giveNumber=((giveNumber/10000).toFixed(1))+'万'
                }else{
                    this.giveNumber=giveNumber
                }
        },
        commNumber(){
            let commentsNumber=this.commentsNumber
            if(commentsNumber>=10000){
                    this.commentsNumber=((commentsNumber/10000).toFixed(1))+'万'
            }else{
                    this.commentsNumber=commentsNumber
            }
        },

        //点击，点赞 ，评论 收藏后 先尝试深链唤起app  超时(无app) 提示登录吗？  然后提示下载app,跳转原文章分享下载页
        logins(){ //
                
        },
        //  唤起app / 点击打开看看
        evokeApp(){
            //尝试唤起app
                 setTimeout(function(){

                    window.location.href = "com.baidu.tieba://"//唤起APP

                   },2000);

          window.location.href = "download.html"//2秒内没有唤起，表示手机中没有该APP，去下载页

        
     },
        //视频播放 /暂停
        plays(){
           
            //点击图标时
            // this.imgs=document.getElementById('imgs');
            // if(this.imgs){
            //     this.imgs.onclick=function(){
            //         console.log('点击了图片')
            //         if(videoo.paused){
            //             videoo.play();
            //             console.log('播放中')
            //             imgs.style.display='none'
            //         }else{
            //             videoo.pause();
            //             console.log('暂停中')
            //             imgs.style.display='block'
            //         }
            //     }
            // }
            //点击视频区域
            this.videoo=document.getElementById('videoo');
             if(this.videoo){
                  this.videoo.onclick=function(){
                      console.log('点击了视频')
                      if(videoo.paused){
                          videoo.play();
                          console.log('播放中')
                          imgs.style.display='none'
                      }else{
                          
                          videoo.pause();
                          console.log('已暂停')
                          imgs.style.display='block'
                      }
                  }
             }
            
        }
    }
}
</script>
<style lang="less" scoped>
.pages{
    
   width: 750px;
   height: 100vh;
   position: relative;
   
.videoss{
    width: 100%;
    height: 100%;
    background: #cccccc;
    .videos{
        // width: 100%;
        // height: 100%;
        
        #imgs{
            position: absolute;
            top: 40%;
            left: 225px;
            width: 300px;
            height: 300px;
        }
        #videoo{
        width: 100%;
        height: 100%;
        }
    }
    
    .name_title{
        position: absolute;
        z-index: 2;
        left: 25px;
        top: 75%;
        height: 40px;
        text-align: left;
       .nickname{
           width: 150px;
         font-size: 24px;
         padding-bottom: 20px;
       } 
       .video_title{
           width: 200px;
           font-size: 16px;
           display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;//控制行数
            overflow:hidden;
       }
    }


    .areas{
           position: absolute;
           left: 650px;
            top: 60%;
            z-index: 2;
            img{
                width: 40px;
                height: 40px;
            }
            .text{
                font-size: 28px;
            }
        
    }
    
}

  
     
    .topad_center{
        position: absolute;
        bottom:0;
        left: 0;
        width: 750px;
        height: 100px;
        background: burlywood;
        border: 1px solid burlywood;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        display: flex;
        // justify-content: center;
        align-items: center;
        img{
            width: 30px;
            height: 30px;

        }
        .i-title{
            font-size: 16px;
            color: #333333;
            padding-left: 20px;
            padding-right: 100px;
            box-sizing: border-box;
        }
        .down{
            width: 120px;
            height: 80px;
            .i-button{
                border: 1px solid gray;
            border-radius: 5px;
            text-align: cneter;
            line-height: 80px;
            font-size: 14px;
            color: #000000;
            background: gray;
            
            }
            
        }
    } 
      
      
    
    
}
</style>