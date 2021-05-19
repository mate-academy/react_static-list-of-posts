import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

import './PostList.scss';

export const PostList = ({ listOfPosts }) => (
  <ul className="post__list">
    {listOfPosts.map(post => (
      <li className="post__item" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  listOfPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
