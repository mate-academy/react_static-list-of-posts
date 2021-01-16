import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList';
import { UserTypes } from '../../types';
import { User } from '../User/User';

export const Post = ({ user, title, body, comment }) => (
  <div className="item-wrapper">
    <h2 className="title">{title}</h2>
    <p className="main-text">{body}</p>
    <User {...user} />
    <CommentList comment={comment} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: UserTypes.isRequired,
  comment: PropTypes.arrayOf(UserTypes).isRequired,
};
