<template>
  <div class="watch-demo">
    <div class="watch-demo-item">
      <input type="text" v-model="val1">
      <div>{{value1}}</div>
    </div>
    <div class="watch-demo-item">
      <input type="text" v-model="obj.val2">
      <div>{{value2}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchDemo',
  data () {
    return {
      val1: '',
      value1: '',
      obj: {
        val2: ''
      },
      value2: ''
    }
  },
  watch: {
    val1 (val, oval) {
      this.value1 = val
    },
    'obj': {
      handler (val, oval) {
        this.value2 = val.val2
      },
      deep: true,
      // immediate: true
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .watch-demo{
    .watch-demo-item{
      margin-top: 20px;
      &:nth-child(1){
        margin-top: 0;
      }
    }
  }

</style>
