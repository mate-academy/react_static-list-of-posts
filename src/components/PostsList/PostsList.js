import React from 'react';
import Post from '../Post/Post';
import './PostsList.scss';
function PostsList({ posts }) {
  return (
    <div className="post-list">
      { posts.map((post)=> {
        return (
          <Post key={ post.id } post = { post }  />
        )
      }) }
    </div>
  );
}








export default PostsList;
