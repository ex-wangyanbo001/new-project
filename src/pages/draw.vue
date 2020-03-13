<template>
    <div class="pages">
    
    <confirm v-model='show' :show-cancel-button='sor' @on-confirm='confi'>
        <div class="title">选择语言</div>
        <div  :class="isSelect===index?'lu-EN':'lu-CN'" @click="langue(index)" v-for="(item,index) in list" :key="index">{{item}}</div>
        
        
    </confirm>
    </div>
</template>

<script>
import { Confirm } from 'vux'
export default {
    
    data(){
        return{
          show:true,
          sor:false,
          list:["英语","中文" ],
          isSelect:'',
          language:''
        }
    },
    components:{
        Confirm
    },
    
    created() {
     
      var lists = localStorage.getItem("language");
        console.log(lists)
        var  a=this.list.indexOf(lists)
        // this.list[this.isSelect]= lists;
          
        
        console.log(a)
        this.langue(a)
        
    },
    mounted() {
        
        
    },
    methods:{
        
              
      langue(index){
                this.isSelect=index;
                console.log(index)
        },
        confi(){
              
             localStorage.setItem('language', this.list[this.isSelect]);
                
        
        }
    }
    
}
</script>

<style lang="less" scoped>
    .pages{
        width: 750px;
        height: 1130px;
        background:wheat;
        
    }
    .title{
        margin-top: -50px;
        padding-bottom:30px; 
        font-size: 40px;
        color: #333333;
    }
   
  .lu-EN{
        font-size: 32px;
         margin-top: 30px;
        color: yellow;
        }
      .lu-CN{
        font-size: 32px;
         margin-top: 30px;
         color: #333333;
       }
</style>