import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { PostShape } from './Shapes/PostShape';

export const PostList = ({ postList }) => (
  <div className="App__list">
    {
      postList.map(post => (
        <Post {...post} key={post.id} />
      ))
    }
  </div>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(PostShape).isRequired,
}.isRequired;
