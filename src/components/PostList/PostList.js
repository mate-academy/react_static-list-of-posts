import React from 'react';
import PropTypes from 'prop-types';

import './PostList.scss';

import { PostShape } from '../shapes/PostShape';
import { Post } from '../Post/Post';

export const PostList = ({ compilledPosts }) => (
  <ul className="post-list">
    {compilledPosts.map(post => (
      <li className="post-list__item" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = PropTypes.arrayOf(PostShape).isRequired;
