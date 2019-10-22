<template>
  <div>
    <tab :route="routePath"></tab>
    <router-view v-if="!isShow"></router-view>
  </div>
</template>

<script>
import tab from './tab'
export default {
  name: 'AppMain',
  components: {
    tab
  },
  data () {
    return {
    }
  },
  computed: {
    isShow: {
      get () {
        return this.$route.path === '/'
      }
    },
    routePath () {
      return this.$route
    }
  }
}
</script>

<style scoped>
</style>
