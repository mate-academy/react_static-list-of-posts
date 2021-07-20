import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './Post.scss';

export const PostList = ({ posts }) => (
  posts.map(post => (
    <div className="post" key={post.id}>
      <Post post={post} />
    </div>
  ))
);

PostList.propTypes = {
  posts: PropTypes.arrayOf().isRequired,
};
