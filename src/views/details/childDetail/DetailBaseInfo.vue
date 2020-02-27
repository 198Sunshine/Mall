<template>
  <div class="info">
    <div class="info-title">{{commodity.title}}</div>
    <div>
      <span class="info-n">{{commodity.newPrice}}</span>
      <span class="info-o">{{commodity.oldPrice}}</span>
      <span class='info-count' :style="{'backgroundColor':commodity.discountBgColor}">{{commodity.discountDesc}}</span>
    </div>
    <div class="center-other" v-if="commodity.columns !== undefined">
      <span>{{commodity.columns[0]}}</span>
      <span>{{commodity.columns[1]}}</span>
      <span>{{commodity.services[commodity.services.length -1].name}}</span>
    </div>
    <!--v-if="commodity.columns !== undefined && commodity.services.length >0"防止报length的undefind错误-->
    <div class="info-service" v-if="commodity.columns !== undefined && commodity.services.length >0">
      <span class="info-service-item" v-for="index in commodity.services.length -1">
        <img :src="commodity.services[index].icon" alt="">
        <span>{{commodity.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      commodity: {
        type: Object,
        default() {
          return {}
        }
      }}
  }
</script>

<style scoped>
  .info{
    margin-top: 10px;
    padding: 0 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title{
    font-size: 15px;
    color: #333333;
  }
  .info-n{
    font-size: 22px;
    color: var(--color-high-text);
  }
  .info-o{
    font-size: 14px;
    text-decoration: line-through ;
  }
  .info-count{
    color: white;
    font-size: 14px;
  }
  .info-service{
    display: flex;
    position: relative;
    top: 32px;
    justify-content: space-between;
    color: #222222;
    font-size: 12px;
  }
  .info-service img{
    width: 13px;
    height: 13px;
  }
  .info-service-item{
    padding: 0 2px;
  }
  .center-other{
    font-size: 14px;
    position: relative;
    top: 8px;
    display: flex;

    /*弹性盒子周围留有空白*/
    justify-content: space-between;
  }

</style>