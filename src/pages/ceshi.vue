<template>
    <div>
        <!-- <div v-for="(item,index) in List" :key="index">{{item}}</div> -->
        <div>哈哈</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            List:[1,1,1,1]
        }
    },
    
    methods:{

    },
    created(){
        setTimeout(()=>{
            this.List=[2,3,4,5]
        },2000)
        console.log('我是created中的')
    },
    updated(){
        console.log('updated中的')
    }
}
</script>