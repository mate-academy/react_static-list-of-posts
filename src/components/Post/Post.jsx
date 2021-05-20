import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { CommentType, UserType } from '../../types';
import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <strong>{title}</strong>

    <p className="body">{body}</p>

    <User {...user} />

    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(UserType).isRequired,
  comments: PropTypes.arrayOf(CommentType).isRequired,
};
