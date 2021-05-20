import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <h2 className="post__title">{title}</h2>
    <p className="post__body">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({}).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
