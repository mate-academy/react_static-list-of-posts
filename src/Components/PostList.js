import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { PostType } from '../types';

export function PostList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li
          className="post"
          key={post.id}
        >
          <Post {...post} />
        </li>
      ))}
    </ul>
  );
}

PostList.propTypes = PropTypes.arrayOf(PostType).isRequired;
