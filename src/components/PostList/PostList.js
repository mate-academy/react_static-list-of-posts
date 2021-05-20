import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="post__list">
    {posts.map(post => (
      <li key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

const PostType = PropTypes.shape({
  id: PropTypes.number.isRequired,
});

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostType).isRequired,
};
