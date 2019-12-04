import React from 'react';
import Post from './Post';

const PostList = ({posts}) =>(  // eslint-disable-line
  <div className="container">
    {posts.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </div>
);

export default PostList;
