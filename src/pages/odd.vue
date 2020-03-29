<template>
    <div>
        <div @click="btn" v-for="(item,index) in list" :key="'list2'+index">{{item.content}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[{title:1,content:111},
            {title:22,content:222},
            ]
        }
    },
    created(){
       
        },
    methods:{
        btn(item){
            console.log(Object.keys(this.list))
        }
    },
    
}
</script>
<style lang="less" scoped>

</style>