<template>
  <div class="columns">
    <div class="column is-one-third"
    v-for="(post, title) in posts"
    v-bind:key="post.id">
      <app-post :link="post.rest_api_enabler.Link">
        <h3 slot="title" v-html="post.title.rendered"></h3>
        <span slot="content" v-html="post.excerpt.rendered"></span>
      </app-post>
    </div>
  </div>
</template>
<script>
  import Post from './Post.vue'
  import { mapGetters } from 'vuex'
  const fetchInitialData = (store, route) => {
    let categoryId = 2
    if (route.params.id === 'mobile') {
      categoryId = 11
    }
    return store.dispatch('postsModule/updateCategory', categoryId)
  }
  export default {
    asyncData (store, route) {
      return fetchInitialData(store, route)
    },
    components: {
      'app-post': Post
    },
    computed: {
      ...mapGetters('postsModule', ['posts'])
    },
    methods: {
      loadPosts () {
        fetchInitialData(this.$store, this.$route)
      }
    },
    watch: {
      '$route' (to, from) {
        this.loadPosts()
      }
    },
    created () {
      this.loadPosts()
    }
  }
</script>
