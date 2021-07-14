import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { PostType } from '../../types';

export const PostList = ({ postList }) => (
  <ul>
    {postList.map(post => (
      <li key={post.id}>
        <Post post={post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(PostType).isRequired,
};
