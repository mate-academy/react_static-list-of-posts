import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import './postlist.scss';

export const PostList = ({ posts }) => (
  <ul className="list">
    {posts.map(post => (
      <li key={post.id} className="list__item">
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
