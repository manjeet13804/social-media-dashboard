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
     },
      likePost: async(state, action) => {
        await api.likePost(action.payload)
        getPosts();
        
      },
      createPost: async(state, action) => {
         await api.createPost(action.payload)
        getPosts();
        console.log(state)
      },
      updatePost: async(state, action) => {
       await api.updatePost(action.payload)
        getPosts();

      },
      deletePost: async(state, action) => {
         await api.deletePost(action.payload)
        getPosts();

      },
     
   }
})
export const {fetchPosts,likePost,createPost,updatePost,deletePost ,getPosts } = posts.actions;
export default posts.reducer;