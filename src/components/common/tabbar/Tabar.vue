<template>
  <div class="tabar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
 .tabar{
   display: flex;
   position: fixed;
   left: 0;
   bottom: 0;
   right: 0;
   background: #f6f6f6;
   box-shadow: 10px -3px 1px rgba(0, 0, 0, alpha);
   z-index: 10;
 }
</style>
