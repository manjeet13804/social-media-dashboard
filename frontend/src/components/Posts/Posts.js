import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
import Post from './Post/Post';
import { getPosts } from '../../redux/reducers/posts';
const Posts = ({ setCurrentId }) => {
  const dispatch=useDispatch()
  let posts = dispatch(getPosts())
console.log((posts))
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
