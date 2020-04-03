<template>
<div class="pages">
    <div class="news-index">
            <div class="news-tabs">
                <ul>
                  <li :class="isSelect==index? ' tabs ':'tabs2'" v-for="(item,index) in list" :key="index" @click="Tabs(index)">{{item}}</li>
                </ul>
             </div>

            <div class="news-project">
                <div class="scroll-div">
                    <div  class="project-item" v-for="(item1,index1) in lists" :key="index1">{{item1}}</div>
                </div>
             </div>   
    </div>
    <div class="card-list" >
        <div class="card-center">
            <div class="pk">pk</div>
         <div class="card-title">{{title}}</div>
         <div class="vote">
             <div class="vote-yes">有</div><div class="vote-no">没有</div>
         </div>
        </div>
    </div>
</div>
    
</template>

<script>

export default {
  
    data(){
        return{
            isSelect:0,
            list:['推荐','保险','健康','视频'],
            lists:['小白必看','保险推荐','理赔宝典','防坑指南','嘘嘘嘘嘘','哈哈哈哈'],
            title:'宅在家有没有更轻松？投票权交给你会投给哪个一票呢？?????????????????????'
           
        }
    },
    created(){
        
    },
    mounted(){
       
    },
    methods:{
        Tabs(index){
            this.isSelect=index
        },
        
    }
}
</script>

<style lang="less" scoped>
 .pages{
     width: 750px;
     height: 100vh;
     background-color: #cccccc;
     .news-index{
         width: 100%;
         height: 300px;
         background-color: #ffffff;
         border-top: 1px solid #cccccc;
        .news-tabs{
            width: 100%;
            height: 60px;
            padding-top: 20px;
            padding-left: 20px;
            padding-bottom: 80px;
            box-sizing: border-box;
            ul{
                display: flex;
            
             .tabs{
                 color: black;
                 font-size: 36px;
                 padding-right: 20px;
                 position: relative;
             &:after {
                
              content: '';
              position: absolute;
              bottom: -15px;
              top: auto;
              left: 25px;
              height: 3px;
              width: 22px;
              background-color: black;
            }
             }
            .tabs2{
                width: 120px;
                color: gray;
                font-size: 28px;
                padding-right: 20px;
                 
               
            }
            }
         } 
       .news-project{
           width: 100%;
           padding-left: 20px;
           height: 200px;
            overflow: scroll;
           
        // display: flex;
        .scroll-div{
            width: 200%;
            display: flex;
             }
         .project-item{
            margin-right: 30px;
            width: 200px;
            height: 150px;
            border-radius: 10px;
            border: 1px solid #cccccc;
            text-align: center;
            line-height: 150px;
            font-size: 40px;
           }
       }  
       .news-project::-webkit-scrollbar {display:none} 
     }
 .card-list{
    width: 100%;
    height: 500px;
    background: #ffffff;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 20px ;
    .card-center{
        width: 710px;
        height: 100%;
        border: 1px solid gray;
        border-radius: 10px;
        text-align: center;
        
        .pk{
            padding-top: 40px;
            padding-bottom: 40px;
            font-size: 60px;
            color: black;
        }
        .card-title{
            width: 100%;
            height: 120px;
            line-height: 40px;
            font-size: 36px;
            overflow: hidden;
            -webkit-line-clamp:2;//显示行数
            text-overflow:ellipsis;//显示为省略号
        }
        .vote{
            width: 100%;
            display: flex;
            text-align: center;
            .vote-yes{
                width: 120px;
                height: 60px;
            }
            .vote-no{
                width: 120px;
                height: 60px;
            }
            
        }
    }
 }
 }
</style>