<template>
  <section class="post">
    <div class="container">

      <!-- header -->
      <div class="post-header">
        <img :src="post.img" :alt="post.title">
        <h2 class="title">{{ post.title }}</h2>
        <p>{{ post.descr }}</p>
      </div>

      <!-- body -->
      <div class="post-body">
        <p>{{ post.content }}</p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>