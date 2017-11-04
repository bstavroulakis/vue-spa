import appService from '../app.service.js'
const defaultState = {
  posts: [],
  categoryId: 0
}

const inBrowser = typeof window !== 'undefined'
const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.postsModule : defaultState

const getters = {
  posts: state => state.posts
}

const actions = {
  updateCategory (context, categoryId) {
    if (state && state.categoryId === categoryId) {
      return
    }
    if (state) {
      context.commit('resetPosts')
    }
    return appService.getPosts(categoryId).then(data => {
      context.commit('updateCategory', { categoryId, posts: data })
    })
  }
}

const mutations = {
  updateCategory (state, category) {
    state.categoryId = category.categoryId
    state.posts = category.posts
  },
  resetPosts (state) {
    state.posts = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
