<template>
  <div id="app">
    <MainTabItem/>
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>

import MainTabItem from 'components/content/mainTabbar/MainTabItem';

export default {
  name: 'App',
  components: {
    MainTabItem
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
