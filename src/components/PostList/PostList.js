import React from 'react';
import PropTypes from 'prop-types';

import { PostPropTypes } from '../PropTypes/PostPropTypes';
import { Post } from '../Post';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <section className="post_list">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(PostPropTypes).isRequired,
  ).isRequired,
};
