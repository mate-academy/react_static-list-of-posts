import React from 'react';
import PropTypes from 'prop-types';
import { PostListType } from '../../types';
import { Post } from '../Post';

import './Posts.scss';

export const PostList = ({ postsList }) => (
  <ul className="posts">
    {postsList.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </ul>
);

PostList.propTypes = {
  postsList: PropTypes.arrayOf(PropTypes.shape(PostListType).isRequired)
    .isRequired,
};
