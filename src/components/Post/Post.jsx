import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { CommentShape, UserShape } from '../../types';
import './Post.scss';

export const Post = ({
  user,
  title,
  body,
  comments,
}) => (
  <div className="post">
    <h2 className="post__title">{title}</h2>
    <p className="post__subtitle">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  user: PropTypes.objectOf(UserShape).isRequired,
  comments: PropTypes.arrayOf(CommentShape).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
