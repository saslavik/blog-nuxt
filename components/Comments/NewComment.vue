<template>
  <section class="new-comment">
    <div class="container">
      <!-- message -->
      <message v-if="message" :message="message" />
      <form @submit.prevent="onSubmit" class="new-comment-form">
        <!-- name -->
        <appInput v-model="comment.name">Name: </appInput>
        <!-- text -->
        <appTextarea v-model="comment.text">Text: </appTextarea>
        <!-- buttons -->
        <div class="controls">
          <appButton>Submit!</appButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import message from '@/components/UI/Message.vue';
import appButton from '@/components/UI/Controls/Button.vue';
import appInput from '@/components/UI/Controls/Input.vue';
import appTextarea from '@/components/UI/Controls/Textarea.vue';

export default {
  components: {
    message,
    appButton,
    appInput,
    appTextarea
  },
  data() {
    return {
      message: null,
      comment: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.comment);
      this.message = 'Submited!';
      this.comment.name = '';
      this.comment.text = '';
    }
  }
}
</script>

<style lang="scss">
.new-comment {
  text-align: center;
  &-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px;
  }
}
</style>