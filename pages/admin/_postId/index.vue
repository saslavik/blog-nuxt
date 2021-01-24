<template>
  <newPostForm
  :postEdit="post"
  @submit="onSubmit"/>
</template>

<script>
import newPostForm from '@/components/admin/newPostForm.vue'

export default {
  components: {
    newPostForm
  },
  layout: 'admin',
  data() {
    return {
      post: {
        id: 1,
        title: '1 post',
        descr:'Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты.',
        img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg',
        content: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Путь решила, великий он выйти ему все, последний возвращайся эта коварный, переулка снова рукописи буквоград меня его рукопись даже наш.'
      }
    }
  },
  methods: {
    onSubmit(post) {
      console.log('Post Editing');
      console.log(post);
    }
  }
}
</script>