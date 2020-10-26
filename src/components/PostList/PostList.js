import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './PostList.scss';
import { PostShape } from '../shapes/PostShape';

export const PostList = ({ posts }) => (
  <div className="postList">
    {posts.map(postItem => <Post key={postItem.id} post={postItem} />)}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};
