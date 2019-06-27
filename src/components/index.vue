<template>
<div class="index">
  <div class="index-memu">
    <div class="index-memu-header">菜单</div>
    <div>
      <div class="index-memu-item" v-for="(item, index) in memuList" :key="index"
      @click="toDemo(item.path)">
        <span class="index-memu-item-index">{{index+1}}:</span>
        <span class="index-memu-item-name">{{item.name}}</span>
      </div>
    </div>
  </div>
  <div class="index-content">
    <router-view/>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      memuList: [
        {name: 'watchDemo', path: '/watchDemo'}
      ]
    }
  },
  methods: {
    toDemo (path) {
      this.$router.push({path: path})
    }
  }
}
</script>
<style lang="scss" scoped>
  .index{
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    background: rgba(251,251,251,1);
    border: 10px solid rgba(251,251,251,1);
    .index-memu{
      width: 300px;
      height: 100%;
      background: bisque;
      .index-memu-header{
        height: 40px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        line-height: 40px;
      }
      .index-memu-item{
        border-top:1px solid rgba(251,251,251,1) ;
        height: 32px;
        font-size: 16px;
        line-height: 32px;
        position: relative;
        &:hover{
          background: cornflowerblue;
          font-weight: bold;
          cursor: pointer;
        }
        .index-memu-item-index{
          position: absolute;
          left: 10px;
        }
        .index-memu-item-name{
          margin-left: 30px;
        }
      }
    }
    .index-content{
    }
  }
</style>
