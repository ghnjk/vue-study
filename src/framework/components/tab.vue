<template>
  <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab" @tab-click="PushToRoute">
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'tab',
  props: ['route'],
  watch: {
    route () {
      this.addTab(this.editableTabsValue)
    }
  },
  data () {
    return {
      editableTabsValue: '1',
      editableTabs: [
        {
          title: '首页',
          name: '1',
          content: '/'
        }
      ],
      tabIndex: 1,
      Path: ''
    }
  },
  methods: {
    PushToRoute () {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      tabs.forEach(item => {
        if (item.name === activeName) {
          this.$router.push(item.content)
        }
      })
    },
    addTab (targetName) {
      let flag = 1
      let newTabName = ++this.tabIndex + ''
      this.editableTabs.forEach(item => {
        if (item.title === this.route.meta['title']) {
          this.editableTabsValue = item.name
          flag = 0
        }
      })
      if (flag === 1) {
        this.editableTabs.push({
          title: this.route.meta['title'],
          name: newTabName,
          content: this.route.path
        })
        this.editableTabsValue = newTabName
      }
    },
    removeTab (targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    }
  }
}
</script>

<style scoped>

</style>
