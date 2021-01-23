<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <comments :comments="comments" />
    <new-comment />
  </div>
</template>

<script>
import post from '@/components/Blog/Post.vue';
import comments from '@/components/Comments/Comments.vue';
import newComment from '@/components/Comments/NewComment.vue';

export default {
  components: {
    post,
    comments,
    newComment
  },
  data() {
    return {
      post: {
        id: 1,
        title: '1 post',
        descr:'Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты.',
        img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg',
        content: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Путь решила, великий он выйти ему все, последний возвращайся эта коварный, переулка снова рукописи буквоград меня его рукопись даже наш.'
      },
      comments: [
        {name: 'Alex', text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Рыбными, вопрос послушавшись семь вскоре алфавит наш его собрал до свое снова строчка великий запятых путь, взобравшись, осталось скатился буквоград.'},
        {name: 'John', text: 'Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Текстами несколько что океана повстречался страна, взобравшись рукопись ручеек. Повстречался снова маленький приставка города рыбного моей, своих рукописи что речью?'}
      ]
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