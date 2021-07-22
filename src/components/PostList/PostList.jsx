import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { postPropTypes } from '../../types';

export const PostList = ({ posts }) => (
  <p>
    {posts.map(post => (
      <p className="card border-primary mb-3" key={post.id}>
        <Post post={post} />
      </p>
    ))}
  </p>
);
PostList.propTypes = {
  posts: PropTypes.arrayOf(postPropTypes).isRequired,
};
