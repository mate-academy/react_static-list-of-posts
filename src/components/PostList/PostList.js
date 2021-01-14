import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post';
import { TypePost } from '../../types';

export const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id} className="post-tile">
        <Post postItem={post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = PropTypes.arrayOf(TypePost).isRequired;
