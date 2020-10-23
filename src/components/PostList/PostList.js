import React from 'react';
import PropTypes from 'prop-types';
import { PostPropTypes } from '../propTypes/PostPropTypes';
import { Post } from '../Post/Post';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <section className="posts">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(PostPropTypes)).isRequired,
};
