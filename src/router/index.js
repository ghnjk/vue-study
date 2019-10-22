import Vue from 'vue'
import Router from 'vue-router'
import Home from '../framework/home.vue'
import SimpleRender from '../components/lessons/SimpleRender'
import test from '../components/lessons/test'

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
          meta: {
            title: '课程练习'
          },
          children: [
            {
              path: 'simple_render',
              name: 'SimpleRender',
              component: SimpleRender,
              meta: {
                title: '简单文本样例'
              }
            }
          ]
        },
        {
          path: '/test',
          name: 'test',
          meta: {
            title: '测试页面'
          },
          component: test
        },
        {
          path: 'simple_render',
          name: 'SimpleRender',
          component: SimpleRender,
          meta: {
            title: '简单文本样例'
          }
        }
      ]
    }
  ]
})
