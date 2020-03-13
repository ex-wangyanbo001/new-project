<template>
    <div class="page">
        <div class="loading">
            <div class="loading_num" :style="{width:((index+1)/questionData.length*100)+'%'}">{{index+1}}</div>
        </div>
        <div class="topic">{{questionData[index].title}}</div>
        <!-- <div class="dv"></div> -->
        <div class="issue" v-if="questionData[index].type==1">
            <div v-for="(item,i) in questionData[index].answers" :key="i"  @click="switchTo(item,i)">
                
            <img  :src="isSelect===i?require('../../assets/images/icyxz.png'):require('../../assets/images/icwxz.png')" alt=""> 
           {{item}}
            </div>
            
        </div>

        <div v-else>
            <div class="center">

                <div><input type="text" placeholder="请输入您的建议" maxlength="300"></div>
            </div>

            <div class="bottom">
                    <div class="btn">确定</div>
            </div>
        </div>


    </div>
</template>

<script>

export default {
    data(){
        return{

            index:0,  //index 是当前题目   索引
            isSelect:'',
            
        
            questionData:[
                {
                    type:1,
                    title:'我是题目1',
                    answers:[
                        '我是答案1',
                        '我是答案2',
                        '我是答案3',
                    ]

                },
                {
                    type:1,
                    title:'我是题目2',
                    answers:[
                        '我是答案1',
                        '我是答案2',
                        '我是答案3',
                    ]

                },
                {
                    type:2,
                    title:'我是题目3'

                }
            ]
        }
    },
    methods:{
        
        switchTo(item,i){
                this.isSelect=i
            
                    
                    
                if(this.questionData.length>this.index){   
                            setTimeout(()=>{
                     this.index=this.index+1  //index是当前题目（第几题）  索引
                
                    this.isSelect=''
                     },500)
                   }else{
                     alert('没有更多题目')
                 }
                        
                
                
                    

              

        },
        
    }
}
</script>
<style lang="less" scoped>
    .page{
        
       
        // background: #F3F3F3;
        .loading{
                // padding-top: 47px ;
                margin-left: 40px;
               
        width:670px ;
        height:60px;
        background: #F3F3F3;
        border-radius: 40px; 
        .loading_num{
            width: 67px;
            height: 60px;
            background: #FFB800;
            border-radius: 40px;
            text-align: center;
            line-height: 60px;
            font-family: Roboto-Bold;
            font-size: 32px;
            color: #FFFFFF;
        }
        }

        .topic{
            padding-top: 42px;
            padding-bottom: 48px;
            // width: 586px;
            height: 40px;
            font-family: Roboto-Medium;
            font-size: 34px;
            color: #222222;
            box-sizing: border-box;
        }
        
        .issue{
            width: 750px;
            padding-left: 40px;
            margin-top: 20px;
            border-top: 20px solid  #F3F3F3;
           
            div{
                // display: flex;
                vertical-align:middle;
                height: 139px;
                font-family: Roboto-Regular;
                text-align: left;
                line-height: 139px;
                font-size: 30px;
                color: #222222;
                border-bottom: 2px solid  #EEEEEE;
               }
             img{
                 width: 40px;
                 height: 40px;
                 margin-right: 20px;
                 vertical-align:middle;
             }  
            
        }


        .center{
            padding: 40px ;
            margin-top: 48px;
            border-top: 20px solid  #F3F3F3;
            
            div{
                width: 670px;
                height: 380px;
                background: #F3F3F3;
                border-radius: 10px;
                padding-bottom: 300px;
                        
                        box-sizing: border-box;
                input{  
                        width: 100%;
                        height: 100%;
                        outline: none;
                        padding-left: 20px;
                        font-family: PingFangSC-Regular;
                        font-size: 28px;
                        background: #F3F3F3;;
                    &::placeholder{
                        color: #999999; 
                    }
                }
            }
        }

        .bottom{
            width: 750px;
            height: 600px;
            background: #F3F3F3;
            // 
            box-sizing: border-box;
            padding: 199px 0px 163px 45px;
            .btn{
                
                    
                    width: 660px;
                    height: 88px;
                    background-image: linear-gradient(-180deg, #FE4A90 0%, #F8676C 100%);
                    box-shadow: 0 4px 10px 0 rgba(251,92,122,0.30);
                    border-radius: 20px;
                    font-family: PingFangSC-Semibold;
                    font-size: 30px;
                    color: #F9F9F9;
                    text-align: center;
                    line-height: 88px;
            }
        }
    }
    
</style>