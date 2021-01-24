<template>
  <PostsList :posts="posts" />
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: '1 post',
          descr:'Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты.',
          img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg'
        },
        {
          id: 2,
          title: '2 post',
          descr: 'Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты.',
          img: 'https://iheartdogs.com/wp-content/uploads/2017/09/Brite-Bite-0021-2.jpg'
        },
        {
          id: 3,
          title: '3 post',
          descr:'Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты.',
          img: 'https://img.gazeta.ru/files3/289/7945289/Klondike_playing-pic905-895x505-44980.jpg'
        }
      ]
    }
  }
}
</script>