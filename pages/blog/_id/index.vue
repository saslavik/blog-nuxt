<template>
  <div class="wrapper-content wrapper-content--fixed">
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
  </div>
</template>

<script>
export default {
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