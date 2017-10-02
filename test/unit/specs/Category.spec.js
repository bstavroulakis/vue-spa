import 'es6-promise/auto'
import Vue from 'vue'
import store from '../../../src/vuex/index.js'
import VueRouter from 'vue-router'
import Category from '../../../src/theme/Category.vue'

describe('Category.vue', () => {
  it('should load front-end links', done => {
    Vue.use(VueRouter)
    const router = new VueRouter({
      routes: [
        { path: '/', component: Category }
      ]
    })

    const vm = new Vue({
      el: document.createElement('div'),
      router,
      store,
      render: h => h('router-view')
    })

    store.watch(
      (state) => {
        return state.postsModule.posts
      },
      function () {
        expect(vm.$el.querySelectorAll('.column').length).to.equal(6)
        done()
      }
    )
  })
})
