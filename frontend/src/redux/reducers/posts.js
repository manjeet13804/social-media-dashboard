import { createSlice } from "@reduxjs/toolkit";
import * as api from '../../api/index';

const posts = createSlice({
   name: "posts",
   initialState: { posts: []},
   reducers: {
    fetchPosts: (state, action) => {
      console.log(state.posts)
         return state.posts;
      },
      getPosts: async(state, action) => {
        const data = await api.fetchPosts().then(arr=>arr.json())
        console.log(data)
        // const posts=data.data.map(post=>post);
        // console.log((posts))
        // return {...state,posts:[1,2};
     },
      likePost: (state, action) => {
        return state.map((post) => (post._id === action.payload._id ? action.payload : post));
      },
      createPost: (state, action) => {
        console.log(state.posts)
        return {...state, posts:[...state.posts,action.payload]};
      },
      updatePost: (state, action) => {
      return state.map((post) => (post._id === action.payload._id ? action.payload : post));
        
      },
      deletePost: (state, action) => {
        return state.filter((post) => post._id !== action.payload);

      },
     
   }
})
export const {fetchPosts,likePost,createPost,updatePost,deletePost ,getPosts } = posts.actions;
export default posts.reducer;