import { createSlice } from "@reduxjs/toolkit";
import * as api from '../../api/index';

const posts = createSlice({
   name: "posts",
   initialState:  [],
   reducers: {
    fetchPosts: (state, action) => {
         return state;
      },
      getPosts: async(state, action) => {
               
      const data = await api.fetchPosts().then(newdata=>newdata.data)
      state=[...data];  
      console.log(state)
     },
      likePost: async(state, action) => {
        const data = await api.likePost(action.payload)
        getPosts();
      },
      createPost: async(state, action) => {
        console.log(state)
        const data = await api.createPost(action.payload)
        getPosts();
      },
      updatePost: async(state, action) => {
        const data = await api.updatePost(action.payload)
        getPosts();

      },
      deletePost: async(state, action) => {
        const data = await api.deletePost(action.payload)
        getPosts();

      },
     
   }
})
export const {fetchPosts,likePost,createPost,updatePost,deletePost ,getPosts } = posts.actions;
export default posts.reducer;