import React from 'react';
import PropTypes from 'prop-types';
import { typePost } from '../../types';
import { Post } from '../Post/Post';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="posts">
    {posts.map(post => <Post key={post.id} {...post} />)}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(typePost).isRequired,
};
