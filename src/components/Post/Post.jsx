import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList';
import { Comment } from '../Comment';
import { User } from '../User';

import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <article className="Post">
    <h2 className="Post__header">{title}</h2>
    <p className="Post__text">{body}</p>
    <User {...user} />
    <CommentList commentsList={comments} />
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(User.propTypes).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape(Comment.propTypes),
  ).isRequired,
};
