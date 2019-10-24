<template>
  <div>
    <tab :route="routePath"></tab>
    <Home v-if="isShow"></Home>
    <router-view v-if="!isShow"></router-view>
  </div>
</template>

<script>
import tab from './tab'
import Home from '../home'
export default {
  name: 'AppMain',
  components: {
    tab,
    Home
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
