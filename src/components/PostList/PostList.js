import React from 'react';
import PropTypes from 'prop-types';

import './PostList.scss';
import { Post } from '../Post/Post';
import { typePost } from '../../types';

export const PostList = ({ posts }) => (
  <div className="postList">
    {posts.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(typePost).isRequired,
};
