import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { TypeUser, TypeComments } from '../../types';

export const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}><Post {...post} /></li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,

      user: TypeUser.isRequired,
      comments: PropTypes.arrayOf(TypeComments).isRequired,
    }),
  ).isRequired,
};
