<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <!-- message -->
      <Message v-if="message" :message="message" />

      <form @submit.prevent="onSubmit" class="contact-form">
        <!-- name -->

        <AppInput v-model="user.name" type="text">Name: </AppInput>
        <!-- email -->
        <AppInput v-model="user.email" type="email"> Email: </AppInput>
        <!-- textarea -->
        <AppTextarea v-model="user.text">Text: </AppTextarea>
        <!-- buttons -->
        <div class="controls">
          <AppButton class="btnWhite"> Submit!!! </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      user: {
        name: '',
        email: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.user);
      this.message = 'Submited!';
      this.user.name = '';
      this.user.email = '';
      this.user.text = '';
    }
  }
}
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: #4f68f4;
  color: #fff;
  .title {
    color: #ffffff;
  }
  &-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px;
  }
}
</style>