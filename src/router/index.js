import Vue from 'vue'
import Router from 'vue-router'
import Home from '../framework/home.vue'
import SimpleRender from '../components/lessons/SimpleRender'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'lessons',
          name: 'Lesson',
          children: [
            {
              path: 'simple_render',
              name: 'SimpleRender',
              component: SimpleRender
            }
          ]
        }
      ]
    }
  ]
})
