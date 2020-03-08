<template>
    <div>
        <!-- <div @click="showloading">dianw </div>
        <div  @click="showtoast">点我</div>
        <a href="http://bd.maoni521.com/" @click.prevent='aa'>hehe</a>

        <div @click="ww">我是1
            <div @click="xx">我是2</div>
        </div>
       
        <input ref='inpu' type="text" @keyup.enter="test7">
        <passwordLogin ref='passwordlogin'/> -->
        <div ref='msgDiv'>{{msg}}</div>
        <div v-if='msg1'>my $nextTick:{{msg1}}</div>
        <div  v-if='msg2'>my $nextTick:{{msg2}}</div>
        <div  v-if='msg3'>my $nextTick:{{msg3}}</div>
        <button @click='butm'>点我也</button>


     </div>
</template>

<script>
// import passwordLogin from '@/pages/login/components/passwordLogin'
// import { Loading,Toast  } from 'vux'
export default {
    
    data(){
        return{
           msg:'hello word',
           msg1:'',
           msg2:'',
           msg3:''
        }
    },
    components: {
    // Loading ,
    // Toast,
    // passwordLogin
  },
  mounted () {
    // console.log(this.$refs.passwordlogin,'我是refs打印==')
    // this.$refs.passwordlogin.forget();
    // console.log(this.$refs.passwordlogin.passwordType,'打印出的passwordType')
  },
  
  methods: {

        butm(){
            this.msg='hello 你好',
            console.log(this.$refs.msgDiv)
            this.msg1=this.$refs.msgDiv.innerHTML,
            this.$nextTick(()=>{
                this.msg2=this.$refs.msgDiv.innerHTML
            }),
            this.msg3=this.$refs.msgDiv.innerHTML
        }


  
    //      test7 (event) {
    //     console.log(333333)
    //     alert(event.target.value)
    //   },

    // //  loading 2s后关闭
    // showloading(){
    //     this.$vux.loading.show({
    //         text: 'Loading'
    //     })
    //     setTimeout(()=>{
    //             console.log(this.$vux.toast.isVisible())
    //     },1000)
    //     setTimeout(()=>{
    //         this.$vux.loading.hide()

    //     },2000)
      
    // },

    // //  toast
    // showtoast(){
    //     //显示
    //     // this.$vux.toast.show({
    //     //     text: 'Loading'
    //     //     })
    //     // 显示文字
    //     this.$vux.toast.text('hello', 'center')  
    //     setTimeout(()=>{
    //         this.$vux.toast.hide()
    //         },2000)  
    // },

    // aa(){
    //     console.log(111)
    // },

    // ww(){
    //         console.log('我是1')
    // },
    // xx(){
    //          console.log('我是2')
    // }





    }
    
    
  }



</script>
<style lang="less">
    
</style>