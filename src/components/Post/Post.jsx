import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import PostTypes from '../../types/PostTypes';
import CommentTypes from '../../types/CommentTypes';
import UserTypes from '../../types/UserTypes';
import './Post.scss';

export const Post = ({ post, users, comments }) => (
  <>
    <h2 className="post__titel">{post.title}</h2>
    <p className="post__body">{post.body}</p>
    <User users={users} post={post} />
    <CommentList comments={comments} post={post} />
  </>
);

Post.propTypes = {
  post: PostTypes.isRequired,
  users: PropTypes.arrayOf(UserTypes).isRequired,
  comments: PropTypes.arrayOf(CommentTypes).isRequired,
};
