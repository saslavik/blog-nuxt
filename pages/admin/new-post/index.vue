<template>
  <newPostForm
  @submit="onSubmit"/>
</template>

<script>
import newPostForm from '@/components/admin/newPostForm.vue'

export default {
  components: {
    newPostForm
  },
  layout: 'admin',
  methods: {
    onSubmit(post) {
      console.log('Post added');
      console.log(post);
    }
  }
}
</script>