<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog: </h1>
        <Intro title="Lorem ipsum" />
        <p>Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. На берегу текстов, свою, жизни снова сих пояс строчка агентство рот, великий взобравшись эта коварный рыбными переписали пор путь сбить живет.</p>
        <img src="@/assets/img/article.jpg" alt="">
        <p>Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Своих коварных рукописи живет, грустный грамматики назад ему он там щеке моей себя. Первую, толку маленькая. Буквенных, то! Курсивных, повстречался.</p>
        <p>Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Повстречался, не! Всемогущая залетают подзаголовок, лучше знаках единственное, собрал последний ему составитель коварный мир языкового? Своего букв заголовок составитель грамматики!</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    let title = 'About My SSR blog!',
        descr = 'About My SSR blog! With Nuxt.js!',
        type = 'site'
    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type }
      ]
    }
  },
}
</script>
<style lang="scss">
.about {
  text-align: center;
  p {
    margin: 10px 0;
  }
}
</style>