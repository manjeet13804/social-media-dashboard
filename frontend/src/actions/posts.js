
import * as api from '../api/index.js';
export const getPosts = () => async () => {
  try {
    const  data = await api.fetchPosts();
    console.log(data)
// return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async () => {
  try {
    const { data } = await api.createPost(post);

    // dispatch(createPost(data) );
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async () => {
  try {
    const { data } = await api.updatePost(id, post);

    // dispatch(updatePost(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async () => {
  try {
    const { data } = await api.likePost(id);

    // dispatch(likePost(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async () => {
  try {
    await api.deletePost(id);

    // dispatch(deletePost());
  } catch (error) {
    console.log(error.message);
  }
};
