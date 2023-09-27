import React, {  useState } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import Post from './Post/Post';
import * as api from "../../api/index"

const Posts = ({ setCurrentId }) => {
  const [posts,setPosts] =useState([])
 
     const fetchPosts = async()=> await api.fetchPosts().then(newdata=>setPosts(newdata.data))
    fetchPosts();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className="mainContainer" container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
