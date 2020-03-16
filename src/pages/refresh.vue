<template>
    <div>
        <div>111</div>
        <scroller use-pulldown :pulldown-config='pulldownDefaultConfig' @on-pulldown-loading='refresh' lock-x height="-48" ref="scrollerBottom">
            <div>我是内容</div>
        </scroller>
    </div>
</template>

<script>
import { Scroller } from 'vux'
 const pulldownDefaultConfig = {
                content: '下拉刷新',
                height: 40,
                autoRefresh: false,
                downContent: '下拉刷新',
                upContent: '释放后刷新',
                loadingContent: '正在刷新...',
                clsPrefix: 'xs-plugin-pulldown-'
                }
export default {
    data(){
        return{
            pulldownDefaultConfig: pulldownDefaultConfig
           
        }
    },
    components:{
        Scroller
    },
    mounted() {
        this.$nextTick(() => {
            this.$refs.scrollerBottom.reset({top: 0})
            })
    },
    methods:{
        
        refresh(){}
    }
}
</script>
<style lang="less" scoped>
    
</style>