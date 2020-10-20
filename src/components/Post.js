import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import { UserShape } from '../shapes/UserShape';
import { CommentList } from './CommentList';
import { CommentShape } from '../shapes/CommentShape';

export const Post = ({ title, body, user, comments }) => (
  <div className="App__post">
    <div className="App__title">{title}</div>
    <div className="App__body">{body}</div>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: UserShape.isRequired,
  comments: PropTypes.arrayOf(CommentShape).isRequired,
};
