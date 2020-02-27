<template>
  <div v-show="isShow">
    <div class="toast">
      <div>{{message}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    // props:{
    //   message:String,
    //   default:'',
    //   show:{
    //     type:Boolean,
    //     dafault:false
    //   },
    data() {
      return {
        message:'',
        isShow:false
      }
    },
    methods:{
        show(message='默认文字',time=2000){
          this.isShow= true
          this.message = message

          setTimeout(() => {
            this.isShow = false
            this.message = ''
          },time)
        }
      }
  }
</script>

<style scoped>
  .toast{
    z-index: 999;
    position: fixed;
    width:120px;
    height: 40px;
    text-align: center;
    line-height: 3;
    top:40%;
    left:50%;
    transform: translate(-50%, -50%);
    color: #f7f7f7;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
  }
</style>