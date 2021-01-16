import React from 'react';
import PropTypes from 'prop-types';

import './PostList.scss';

import { PostType } from '../types/types';
import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li className="post-list__item" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostType).isRequired,
}.isRequired;
