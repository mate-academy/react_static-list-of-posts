import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { UsersTypes } from '../../types/usersTypes';
import { CommentsTypes } from '../../types/commentsTypes';

export const Post = ({
  title,
  user,
  body,
  comments,
}) => (
  <div className="post">
    <p className="post__title">{title}</p>
    <p className="post__body">{body}</p>
    <User specificUser={user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: UsersTypes.isRequired,
  comments: PropTypes.arrayOf(CommentsTypes).isRequired,
};
