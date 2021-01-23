<template>
  <section class="new-comment">
    <div class="container">
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
import appButton from '@/components/UI/Controls/Button.vue';
import appInput from '@/components/UI/Controls/Input.vue';
import appTextarea from '@/components/UI/Controls/Textarea.vue';

export default {
  components: {
    appButton,
    appInput,
    appTextarea
  },
  components: {
    appButton
  },
  data() {
    return {
      comment: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.comment)
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