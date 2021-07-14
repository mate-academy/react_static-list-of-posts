import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import PostsType from '../../types/postsTypes';
import UsersType from '../../types/usersTypes';
import CommentsType from '../../types/commentsTypes';

export const Post = ({ post, users, comments }) => (
  <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <User users={users} post={post} />
    <CommentList comments={comments} post={post} />
  </>
);

Post.propTypes = {
  post: PostsType.isRequired,
  users: PropTypes.arrayOf(UsersType).isRequired,
  comments: PropTypes.arrayOf(CommentsType).isRequired,
};
