import React from 'react';
import PropTypes from 'prop-types';
import { TypeComment } from './Comment/TypeComment';
import { TypeUser } from './User/TypeUser';
import { Post } from './Post';

export const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <Post post={post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: TypeUser.isRequired,
    comments: PropTypes.arrayOf(TypeComment.isRequired).isRequired,
  }).isRequired).isRequired,
};
