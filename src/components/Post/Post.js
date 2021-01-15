import React from 'react';
import PropTypes from 'prop-types';
import { TypeOfCommentsList, TypeOfUser } from '../../types';

import { User } from '../User';
import { CommentList } from '../CommentList';

import './Post.scss';

export const Post = ({ body, title, comments, user }) => (
  <div className="post">
    <User user={user} />
    <h2 className="post__title">{title}</h2>
    <div className="post__body">{body}</div>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(TypeOfCommentsList).isRequired,
  user: TypeOfUser.isRequired,
};
