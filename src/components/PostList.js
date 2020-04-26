import React from 'react';
import Post from './Post';

const PostList = ({ post }) => (
  post.map(item => (
    <ul className="post__list" key={item.id}>
      <li>
        <Post post={item} />
      </li>
    </ul>
  ))
);

export default PostList;
