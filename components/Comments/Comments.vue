<template>
  <section v-if="comments" class="comments" >
    <div class="container">
      <h2 class="title">Comments:</h2>
      <p v-if="comments.length === 0">Comments: 0</p>
      <div class="comment" v-for="comment in comments" :key="comment.name">
        <p class="name">{{ comment.name }}</p>
        <p class="text">{{ comment.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss">
.comments {
  margin: 30px auto;
  text-align: center;
}
.comment {
  padding: 20px;
  width: 600px;
  margin-bottom: 20px;
  background-color: #fff;
  text-align: center;
  .name {
    font-size: 24px;
    color: #5c4de7;
    margin-bottom: 12px;
  }
}
</style>