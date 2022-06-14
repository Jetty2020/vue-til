<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
        </div>
        <button type="submit" class="btn">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api';

export default {
  data() {
    return {
      title: '',
      contents: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const res = await createPost({
          title: this.title,
          constents: this.constents,
        });
        console.log(res);
      } catch (error) {
        console.warn(error);
      }
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: #fff;
}
</style>
