import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import './PostList.scss';
import { PostsType } from '../../types';

export const PostList = ({ posts }) => (
  <section className="post-list">
    {posts.map(post => (
      <div className="post-wrap" key={post.id}>
        <Post {...post} />
      </div>
    ))}
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostsType).isRequired,
};

PostList.defaultProp = {
  comments: [],
};
