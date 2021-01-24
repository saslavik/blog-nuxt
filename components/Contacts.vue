<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <!-- message -->
      <message v-if="message" :message="message" />

      <form @submit.prevent="onSubmit" class="contact-form">
        <!-- name -->

        <appInput v-model="user.name" type="text">Name: </appInput>
        <!-- email -->
        <appInput v-model="user.email" type="email"> Email: </appInput>
        <!-- textarea -->
        <appTextarea v-model="user.text">Text: </appTextarea>
        <!-- buttons -->
        <div class="controls">
          <appButton class="btnWhite"> Submit!!! </appButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import appButton from '@/components/UI/Controls/Button.vue';
import message from '@/components/UI/Message.vue';
import appInput from '@/components/UI/Controls/Input.vue';
import appTextarea from '@/components/UI/Controls/Textarea.vue';

export default {
  components: {
    appButton,
    message,
    appInput,
    appTextarea
  },
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