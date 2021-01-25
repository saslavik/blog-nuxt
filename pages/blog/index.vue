<template>
  <div class="wrapper-content wrapper-content--fixed">
    <div class="container">
      <Intro title="My posts: "/>
      <PostsList :posts="posts" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    }
  }
}
</script>
