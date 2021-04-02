<template>
  <button class="pear-button" :class="`theme-${theme}`">
    <slot/>
  </button>
</template>

<script lang="ts">

export default {
  props:{
    theme: {
      type:String,
      default:'button' //没有theme就默认为button
    }
  }
};
</script>


<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>