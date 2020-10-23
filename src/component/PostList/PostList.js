import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { PostShape } from '../propTypes/PostShape';

export const PostList = ({ posts }) => (
  <section className="posts">
    {posts.map(post => <Post key={post.id} {...post} />)}
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};
