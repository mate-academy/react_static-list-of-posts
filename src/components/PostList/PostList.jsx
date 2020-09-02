import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li className="post-item" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string,
      user: PropTypes.object,
      preparedComments: PropTypes.arrayOf(PropTypes.object),
    }),
  ),
};

PostList.defaultProps = {
  posts: [],
};
