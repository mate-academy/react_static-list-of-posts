import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostList = ({ postsPrep }) => (
  <ul className="postList">
    {postsPrep.map(postPrep => (
      <li className="postList__item" key={postPrep.id}>
        <Post {...postPrep} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  postsPrep: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
