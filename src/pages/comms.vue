<template>
     <div class="page">
        
        <div  class="captcha">
               
                    <input type="number" v-model='code[0]'> 
                    <input type="number" v-model='code[1]'> 
                    <input type="number" v-model='code[2]'> 
                    <input type="number" v-model='code[3]'> 
                    <input type="number" v-model='code[4]'> 
                    <input type="number" v-model='code[5]'> 
        </div>
       
        
        <div class="keyboard" v-show='show'>
            <button class="btn" v-for="(item,index) in list" :key="index" @click="impor(item,index)" >{{item}}</button>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
           show:true,
           code:[],
           list:[1,2,3,4,5,6,7,8,9,'',0,'X']
        }
    },
    components: {
   
  },
  
  mounted () {
    
  },
  
  methods: {
       impor(item,index){
        
           let arr=this.code
           let ary=this.list
            if(ary[index]=='X'){
                this.code = arr.slice(0, arr.length -1)
                console.log(arr)
            }else if(arr.length<6){
                 arr=arr.push(ary[index])
                //  console.log(arr)
                 
            }
       }
    
    
  }
}
</script>

<style lang="less" scoped>
    .captcha {
            display: flex;
            justify-content: center;
            padding-top: 80px;
            // width: 750px;
            }
        input {
            margin-right: 20px;
           width: 75px;
           height: 70px;
            text-align: center;
            border: none;
            border-bottom: 1px solid gray;
            font-size: 36px;
            outline: none;
            color: #000000;
            }
        input[type=number]:focus{
            border-bottom: 2px solid #000000;
        }

       
        .keyboard{
            // padding-top: 44px;
            display: flex;
            flex-wrap: wrap;
            position: fixed;
            top: 600px;
            // border-top:1px solid gray ;
           
            width: 750px;
            height: 440px;
            
            
        }
        
        .btn{
            
            outline: none;
            width: 250px;
            height: 110px;
            font-size: 36px;
            border:1px solid gray ;
            background: #ffffff;
             
        }
</style>