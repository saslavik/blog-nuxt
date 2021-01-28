<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <comments :comments="comments" />
    <new-comment :postId="$route.params.id" />
  </div>
</template>

<script>
import axios from 'axios';
import post from '@/components/Blog/Post.vue';
import comments from '@/components/Comments/Comments.vue';
import newComment from '@/components/Comments/NewComment.vue';

export default {
  components: {
    post,
    comments,
    newComment
  },
  async asyncData (context) {
    let [post, comments] = await Promise.all([
      axios.get(`https://blog-nuxt-62417-default-rtdb.firebaseio.com/posts/${context.params.id}.json`),
      axios.get(`https://blog-nuxt-62417-default-rtdb.firebaseio.com/comments.json`)
    ])
    let commentsArrayRes = Object.values(comments.data)
      .filter(comment => (comment.postId === context.params.id) && comment.publish);

    return {
      post: post.data,
      comments: commentsArrayRes
    }
  }
}
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}

.post-header {
  text-align: center;
  margin: 30px 0;
  img {
    max-width: 400px;
    margin-bottom: 16px;
  }
  p {
    color: #999999;
  }
}
.post-body {
  text-align: left;
}
</style>