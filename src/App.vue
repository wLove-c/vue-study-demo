<template>
  <div id="app">
   <div class="app-box">
     <router-view/>
   </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  .app-box{
    flex: 1;
  }
}
  html,body{
    margin: 0;
    padding: 0;
  }
</style>
