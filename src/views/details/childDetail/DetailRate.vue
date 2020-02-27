<template>
  <div  class="comment-info">
  <div v-if="Object.keys(rate).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"> ></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="rate.user.avatar" alt="" @load="imgLoad">
      <span>{{rate.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{rate.content}}</p>
    </div>
    <div class="info-other">
      <span class="date">{{rate.created | showDate}}</span>
      <span>{{rate.style}}</span>
    </div>
  </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'
  export default {
    name: "DetailRate",
    props:{
      rate:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgLoad(){
        this.$emit('imgLoad')
      }
    },
    //将时间戳格式化
    filters:{
      showDate(value){
        const  date = new Date(value * 1000)
        return formatDate(date,'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    padding: 5px 12px;
    color: #333;
    border-bottom: 1px solid #eeeeee;
  }

  .info-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .header-title {
    float: left;
    font-size: 15px;
  }

  .header-more {
    margin-right: 10px;
    font-size: 13px;
  }

  .info-user {
    padding: 10px 0 5px;
  }

  .info-user img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  .info-user span {
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }

  .info-detail {
    padding: 0 5px 15px;
  }

  .info-detail p {
    font-size: 12px;
    color: #777;
    line-height: 1.5;
  }

  .info-detail .info-other {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }

  .info-other .date {
    margin-right: 8px;
  }
</style>