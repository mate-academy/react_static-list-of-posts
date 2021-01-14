import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';

import { Post } from '../Post';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { userPostCommentType } from '../../types';

export const PostList = ({ userPostsComments }) => (
  <ul>
    {userPostsComments.map(post => (
      <li className="full-post" key={post.id}>
        <Post post={post} />
        <User post={post} />
        <CommentList post={post} key={post.comment.postId} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  userPostsComments: PropTypes.arrayOf(userPostCommentType).isRequired,
};
