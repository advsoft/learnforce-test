<template>
  <div
    class="dot"
    :style="styles"/>
</template>

<script>
export default {
  name: 'Dot',
  props: {
    dot: Object
  },
  computed: {
    styles () {
      return {
        top: `${this.dot.y}px`,
        left: `${this.dot.x}px`,
        width: `${2*this.dot.r}px`,
        height: `${2*this.dot.r}px`,
        'border-radius': `${this.dot.r}px`,
        'background-color': this.dot.c
      }
    }
  }
}
</script>

<style lang="scss">
.dot {
  position: absolute;
}
</style>