import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import { Post } from '../Post';

export const PostList = ({ postss }) => (
  <ul>
    {postss.map(post => (
      <li key={post.id} className="post">
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  postss: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
