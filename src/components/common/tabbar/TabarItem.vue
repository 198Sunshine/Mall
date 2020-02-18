<template>
  <div class="tabar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
       <slot name="item-icon-active"></slot>
    </div>
     <div :style="styleColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabarItem',
  props:{
    path:{
      type:String
    },
    activeColor:{
      type:String,
      default:'deeppink'
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    styleColor(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
    methods: {
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
.tabar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  z-index: 12;
}
.tabar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 4px;
}
</style>
