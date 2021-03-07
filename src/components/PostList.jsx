import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { postType } from '../types';

export const PostList = ({ preparedListOfPosts }) => (
  <ul className="post__list">
    {preparedListOfPosts.map(post => (
      <li key={post.id} className="post">
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  preparedListOfPosts: PropTypes.arrayOf({
    ...postType,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
