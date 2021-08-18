import React from 'react';
import { Post } from '../Post';
import { TypePostList } from '../../types';
import './PostList.scss';

const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li className="post-list__post" key={post.id}>
        <Post post={post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: TypePostList.isRequired,
};

export { PostList };
