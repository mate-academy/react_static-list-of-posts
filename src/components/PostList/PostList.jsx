import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { PostsType } from '../../types';
import './PostList.scss';

export function PostList({ posts }) {
  return (
    <ul className="posts">
      {posts.map(post => (
        <li
          key={post.id}
          className="posts__post"
        >
          <Post {...post} />
        </li>
      ))}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostsType).isRequired,
};
