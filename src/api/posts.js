import {posts} from './index';

function fetchPosts() {
    return posts.get('/');
}

function fetchPost(postId) {
    return posts.get(postId);
}

function createPost(postData) {
    return posts.post('/', postData);
}

function deletePost(postId) {
    return posts.delete(postId);
}

export {fetchPosts, fetchPost, createPost, deletePost};
