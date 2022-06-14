<template>
  <div class="main list-container contents">
    <h1 class="page-header">Today I Learned</h1>
    <ul>
      <li v-for="postItem in postItems" :key="postItem._id">
        {{ postItem.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchPosts } from '@/api';

export default {
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async fetchData() {
      const { data } = await fetchPosts();
      this.postItems = data.posts;
      console.log(data);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
