import React from 'react';
import PropTypes from 'prop-types';
import { typePost } from '../../types';

import Post from '../Post/Post';

import './PostList.scss';

const PostList = ({ posts }) => (
  <div className="list">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(typePost).isRequired,
};

export default PostList;
