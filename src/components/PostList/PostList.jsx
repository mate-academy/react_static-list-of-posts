import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';

import { Post } from '../Post/Post';
import { PostType } from '../../types';

export const PostList = ({ posts }) => (
  <div className="post_list">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(PostType),
  ).isRequired,
};
