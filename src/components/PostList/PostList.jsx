import React from 'react';
import PropTypes from 'prop-types';
import { PostsPropTypes } from '../Type/type';
import './PostList.scss';
import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <div className="post-list__list">
    {posts.map(post => (
      <div className="post-list__item" key={post.id}>
        <Post {...post} />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostsPropTypes).isRequired,
};
