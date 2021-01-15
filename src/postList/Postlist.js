import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../post/Post';

import { typeMails } from '../types/propTypesCollection';

import './PostList.scss';

export const PostList = ({ preparedPost }) => (
  <div className="post-list">
    {preparedPost.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = {
  preparedPost: PropTypes.arrayOf(typeMails).isRequired,
};
