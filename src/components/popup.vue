<template>
  <div
    :style="style" 
    class="ui-popup">
    hello
  </div>
</template>

<script>
import t from 'vue-types'
export default {
  name: 'popup',
  props: {
    data: t.arrayOf(Object),
    position: t.object.def({
      width: '25vw',
      height: '100vh'
    })
  },
  computed: {
    style () {
      return { ...this.position }
    }
  }

}
</script>

<style lang="scss" scoped>
.ui-popup{
  display: flex;
  position: fixed;
  right: 0;
  top: 0;
  background:gray;

}
</style>>
