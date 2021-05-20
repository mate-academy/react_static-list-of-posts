import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import './PostList.scss';

export const PostList = ({ posts }) => {
  const { id } = posts;

  return (
    <ul className="post__list">
      {posts.map(post => (
        <li key={id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  );
};

const TypeId = PropTypes.shape({
  id: PropTypes.number.isRequired,
});

PostList.propTypes = {
  posts: PropTypes.arrayOf(TypeId).isRequired,
};
