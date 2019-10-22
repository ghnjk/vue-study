<template>
  <div id="msg">
      {{ message }}
  </div>
</template>

<script>
export default {
  name: 'SimpleRender',
  data: function () {
    return {
      message: 'this is simple string render page.'
    }
  }
}
</script>

<style scoped>

</style>
