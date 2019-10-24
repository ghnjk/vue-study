import Vue from 'vue'
import Router from 'vue-router'
import FrameWork from '../framework/framework.vue'
import SimpleRender from '../lessons/SimpleRender'
import StoreTest1 from '../lessons/store_test_1'
import StoreTest2 from '../lessons/store_test_2'
import test from '../lessons/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FrameWork',
      component: FrameWork,
      children: [
        {
          path: 'simple_render',
          name: 'SimpleRender',
          component: SimpleRender,
          meta: {
            title: '简单文本样例'
          }
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
        },
        {
          path: 'store_test_1',
          name: 'StoreTest1',
          component: StoreTest1,
          meta: {
            title: 'vuex状态测试1'
          }
        },
        {
          path: 'store_test_2',
          name: 'StoreTest2',
          component: StoreTest2,
          meta: {
            title: 'vuex状态测试2'
          }
        }
      ]
    }
  ]
})
