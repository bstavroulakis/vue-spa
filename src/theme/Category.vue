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
  export default {
    components: {
      'app-post': Post
    },
    computed: {
      ...mapGetters('postsModule', ['posts'])
    },
    methods: {
      loadPosts () {
        let categoryId = 2
        if (this.$route.params.id === 'mobile') {
          categoryId = 11
        }
        this.$store.dispatch('postsModule/updateCategory', categoryId)
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
