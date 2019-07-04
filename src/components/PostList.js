/* eslint-disable react/prop-types,no-shadow */
import React from 'react';
import SinglePost from './Post';

const PostList = ({ post }) => (
  <div className="post__container">
    {post.map(post => (
      <div className="post">
        <SinglePost post={post} />
      </div>
    ))}
  </div>
);

export default PostList;
