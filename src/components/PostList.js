import React from 'react';
import PropTypes from 'prop-types';

import { Post } from './Post';

import { TypeUser, TypeComment, TypePost } from '../types';

export const PostList = ({ users, comments, posts }) => (
  <div className="post-list">
    {
        posts.map(post => (
          <Post
            post={post}
            author={users.find(user => user.id === post.userId)}
            comments={comments}
          />
        ))
      }
  </div>
);

PostList.propTypes = {
  users: PropTypes.arrayOf(
    TypeUser.isRequired,
  ).isRequired,

  comments: PropTypes.arrayOf(
    TypeComment.isRequired,
  ).isRequired,

  posts: PropTypes.arrayOf(
    TypePost.isRequired,
  ).isRequired,
};
