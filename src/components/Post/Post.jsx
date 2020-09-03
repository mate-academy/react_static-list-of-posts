import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ title, body, user, comments }) => (
  <article className="post">
    <h3 className="post__title">{title}</h3>
    <p className="post__content">{body}</p>
    <User {...user} />
    <CommentList currentComments={comments} />
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
};

Post.defaultProps = {
  comments: [],
};
