<template>
  <div class="wrapper-content wrapper-content--fixed">
    <div class="container">
      <Intro title="My posts: "/>
      <PostsList :posts="postsLoaded" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded;
    }
  }
}
</script>
