import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';

export const PostList = ({ pList }) => (
  <ul className="posts__list">
    {pList.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </ul>
);

PostList.propTypes = PropTypes.arrayOf({}).isRequired;
