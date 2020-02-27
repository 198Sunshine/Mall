<template>
  <div class="com-item" @click="itemClick">
    <!--@load 监听图片加载完成-->
    <!--    v-lazy:路由懒加载-->
    <img v-lazy="showImg" @load="imgItemLoad">
    <div class="com-item-list">
      <p>{{comItemlist.title}}</p>
      <div>
        <span class="price">{{'￥' + comItemlist.price}}</span>
        <span class="collect">{{comItemlist.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommodityItem",
    props:{
      comItemlist:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showImg(){
        return this.comItemlist.image || this.comItemlist.show.img
      }
    },
    methods:{
      imgItemLoad(){
        //当图片加载完成发射给Home组件
        this.$bus.$emit('imgItemLoad')
      },
      itemClick(){
        this.$router.push('/detail/'+this.comItemlist.iid)
      }
    }
  }
</script>

<style scoped>
  /*.comitem{*/
  /*  float: left;*/
  /*  color: red;*/
  /*  font-size: 13px;*/
  /*}*/
  /*.comitem img{*/
  /*  width: 160px;*/
  /*  height: 225px;*/
  /*  padding: 0 2px 10px;*/
  /*  text-align: center;*/
  /*}*/
  /*.comitem-list{*/
  /*  width: 150px;*/
  /*  border-radius: 30%;*/
  /*}*/
  /*.comitem-list img{*/
  /* width: 25px;*/
  /*  height: 25px;*/

  /*}*/
  .com-item {
    padding-bottom: 40px;
    position: relative;
    width: 49%;
  }

  .com-item img {
    width: 100%;
    /*height: 200px;*/
    height: 100%;
    border-radius: 3px;
  }

  .com-item-list {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .com-item p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .com-item  .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .com-item .collect {
    position: relative;
  }

  .com-item .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
  }

</style>