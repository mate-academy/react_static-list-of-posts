import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import './PostList.scss';

export const PostList = ({ posts }) => (

  posts.map(post => (
    <li key={post.id} className="post">
      <Post {...post} />
    </li>
  ))
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
