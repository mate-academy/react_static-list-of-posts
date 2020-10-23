import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { PostShape } from './Shapes/PostShape';

export const PostList = ({ postList }) => (
  <ul className="App__list">
    {
      postList.map(post => (
        <Post {...post} key={post.id} />
      ))
    }
  </ul>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(PostShape).isRequired,
}.isRequired;
