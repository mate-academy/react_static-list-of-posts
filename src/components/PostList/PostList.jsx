import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';

import { Post } from '../Post';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { userPostCommentType } from '../../types';

export const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li className="full-post" key={post.id}>
        <Post post={post} />
        <User user={post.user} />
        <CommentList comments={post.comment} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(userPostCommentType).isRequired,
};
