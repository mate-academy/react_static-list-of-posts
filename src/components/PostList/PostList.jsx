import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { TypeUser, TypeComment } from '../../type';

export const PostList = ({ prepPosts }) => (
  <div>
    {prepPosts.map(post => (
      <div key={post.id}>
        <Post {...post} />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  prepPosts: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: TypeUser.isRequired,
    comments: PropTypes.arrayOf(
      TypeComment.isRequired,
    ).isRequired,
  }).isRequired,
};
