<template>
  <!--解决浏览器报找不到0...的问题-->
  <div v-if="Object.keys(goods).length !== 0" class="goods-info">
    <table v-for="table in goods.sizes" class="info-size">
      <tr v-for="tr in table" class="goods-tr">
         <td v-for="td in tr">{{td}}</td>
     </tr>
    </table>

    <table class="info-goods">
      <tr v-for="td in goods.infos">
        <td class="info-goods-key">{{td.key}}</td>
        <td class="goods-value">{{td.value}}</td>
      </tr>
    </table>
    <div v-if="goods.images.length !== 0" class="info-img">
      <img :src="goods.images" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoods",
    props:{
      goods:{
        type:Object,
        default(){
          return{}
      }}
    },
    methods:{
      imgLoad(){
        this.$emit('imgLoad')
      }
    }
  }
</script>

<style scoped>
  .goods-info{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .goods-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .goods-info table tr {
    height: 42px;
  }

  .goods-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .info-goods-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }

  .info-goods {
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .goods-value {
    color: #eb4868
  }
  .info-img img {
    width: 100%;
  }

</style>