<template>
    <div>
        <div>12345</div>
    <div>comit11111111</div>
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