<template>
    <li>
        <div class="post-title">
            {{ postItem.title }}
        </div>
        <div class="post-contents">
            {{ postItem.contents }}
        </div>
        <div class="post-time">
            {{ formatedDate }}
            <i class="icon ion-md-create" @click="routeEditPage"></i>
            <i class="icon ion-md-trash" @click="deleteItem"></i>
        </div>
    </li>
</template>

<script>
import {deletePost} from '@/api/posts';
import {formatDate} from '@/utils/filters';

export default {
    props: {
        postItem: {
            type: Object,
            required: true,
        },
    },
    computed: {
        formatedDate() {
            return formatDate(this.postItem.createdAt);
        },
    },
    methods: {
        async deleteItem() {
            if (confirm('You want to delete it?')) {
                await deletePost(this.postItem._id);
                this.$emit('refresh');
            }
        },
        routeEditPage() {
            const id = this.postItem._id;
            this.$router.push(`/post/${id}`);
        },
    },
};
</script>

<style></style>
