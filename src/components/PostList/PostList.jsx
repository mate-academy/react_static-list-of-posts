import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import { Post } from '../Post';
import { postType } from '../type';

export const PostList = ({ postsList }) => (
  <div className="posts">
    {postsList.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = {
  postsList: PropTypes.arrayOf(postType).isRequired,
};
