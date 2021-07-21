import React from 'react';
import PropTypes from 'prop-types';
import { PostPropTypes } from '../../types';
import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <div className="container">
    {posts.map(post => (
      <div key={post.id} className="box message is-success">
        <Post {...post} />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostPropTypes).isRequired,
};
