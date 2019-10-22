<template>
  <div>
    <tab :route="routePath"></tab>
    <home v-if="isShow"></home>
    <router-view v-if="!isShow"></router-view>
  </div>
</template>

<script>
  import tab from './tab'
  import home from '../home'
  export default {
    name: 'app_main',
    components: {
      tab,
      home
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
