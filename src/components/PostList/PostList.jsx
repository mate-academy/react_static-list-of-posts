import React from 'react';
import PropTypes from 'prop-types';
import { PostShape } from '../Shape';
import { Post } from '../Post/Post';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <section className="posts">
    {posts.map(post => <Post {...post} key={post.id} />)}
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(PostShape)).isRequired,
};
