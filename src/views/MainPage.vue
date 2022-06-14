<template>
  <div class="main list-container contents">
    <h1 class="page-header">Today I Learned</h1>
    <ul>
      <post-list-item
        v-for="postItem in postItems"
        :key="postItem._id"
        :postItem="postItem"
      ></post-list-item>
    </ul>
  </div>
</template>

<script>
import { fetchPosts } from '@/api';
import PostListItem from '../components/posts/PostListItem.vue';

export default {
  data() {
    return {
      postItems: [],
    };
  },
  components: {
    PostListItem,
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
