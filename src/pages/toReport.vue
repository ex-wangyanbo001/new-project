<template>
    <div class="pages">
        <div class="options">
            
            <div class="options-title" v-for="(item,index) in list" :key="index" @click="switec(index)">
                <img class="img"  :src="isSelect==index?require('../assets/images/icyxz.png'):require('../assets/images/icwxz.png')" alt="">
                <div>{{item}}</div> 
            </div>
        </div>
        <div class="fill">
            <div class="fill-top">
                <div class="fill-title">举报描述(选填)</div>
                <div class="fill-length">{{text.length}}/200</div>
            </div>
            <div class="fill-bottom">
                <!-- <input  type="text" maxlength='200' v-model="text"> -->
                <textarea v-model="text" id="input" maxlength='200'  wrap="hard" ></textarea>
            </div>
            
        </div>
        <button :class="click==false?'submits':'submitss'" @click="submits">提交</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isSelect:null,
            list:['色情低俗','政治敏感','广告','侵权','其他'],
            text:'',
            click:false
        }
    },
    components:{

    },
    mounted(){
        this.prompt()
    },
    methods:{
        switec(index){
            this.isSelect=index,
            this.click=true
        },
        submits(index){
            if(this.isSelect==null){
                alert('请选择举报类型')
            }else{
                alert('已提交')
                console.log(this.text)
            }
        },
        prompt(){
            if(this.text.length==200){
                alert('最多只能输入200个字')
            }
        }
    }
}
</script>

<style lang="less" scoped>
.pages{
    width: 750px;
    height: 100%;
    .options{
        width: 750px;
        height: 500px;
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
        padding-left: 20px;
       
        
        .options-title{
            width: 100%;
            height: 100px;
            text-align: left;
            // line-height: 100px;
            font-size: 36px;
            color: black;
            display: flex;
            align-items: center;
            .img{
                width: 40px;
                height: 40px;
                margin-right: 20px;
                margin-left: 5px;
                vertical-align:middle;
                
              }
           
            

        }
        .options-title:nth-child(2){
            border-top: 1px solid gray;
            border-bottom: 1px solid gray;
            }
       .options-title:nth-child(4){
            border-top: 1px solid gray;
            border-bottom: 1px solid gray;
            }

    }
    
    .fill{
        width: 750px;
        
       padding: 30px 20px 40px 20px;
       box-sizing: border-box;
      .fill-top{
          padding-bottom: 30px;
          display: flex;
          justify-content: space-between;
        }
        .fill-bottom{
            border: 1px solid gray;
            height: 400px;
            width: 710px;
            #input{
                padding: 10px;
                width: 700px;
                height: 400px;
                outline: none;
                font-size: 28px;
                line-height: 40px;

            }
        }
    }
    .submits{
        width: 710px;
        height: 60px;
        border: 1px solid gray;
        border-radius: 25px;
        text-align: center;
        line-height: 60px;
        font-size: 30px;
        color: #cccccc;
        outline: none;
    }
    .submitss{
        width: 710px;
        height: 60px;
        border: 1px solid gray;
        border-radius: 25px;
        text-align: center;
        line-height: 60px;
        font-size: 30px;
        color: #000000;
        outline: none;
    }
}
</style>