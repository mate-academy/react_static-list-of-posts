import React from 'react';

import './PostList.scss';
import PropTypes from 'prop-types';

import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = PropTypes.arrayOf({
  key: PropTypes.number.isRequired,
}).isRequired;
