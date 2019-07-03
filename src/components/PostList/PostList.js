import React from 'react';
import Post from '../Post/Post';

const PostList = (props) => (
  <ul>
    {props.posts.map(post => (
      <Post post={post} />
    ))}
  </ul>
);
PostList.propTypes = {

}

export default PostList;
