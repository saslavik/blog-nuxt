<template>
  <div class="wrapper-content wrapper-content--fixed">
    <div class="container">
      <promo />
      <Intro title="My lasts posts: "/>
      <PostsList :posts="postsLoaded" />
      <contacts />
      <p>

      </p>
    </div>
  </div>
</template>

<script>
import promo from '@/components/Promo.vue';
import contacts from '@/components/Contacts.vue';

export default {
  components: {
    promo,
    contacts
  },
  // asyncData(contex) {
  //   return new Promise ((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         posts: []
  //       })
  //   }, 1500)
  //   })
  //   .then(data => {
  //     return data
  //   })
  //   .catch(e => {
  //     contex.error(e);
  //   })
  // },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded;
    }
  }
}
</script>
