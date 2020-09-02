import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import { User } from '../User/User';
import { CommentsList } from '../CommentsList/CommentsList';

export const Post = ({ title, body, user, comments }) => (
  <article className="post">
    <div className="post__body">
      <h3 className="post__title">{title}</h3>
      <p className="post__body">{body}</p>
      <User {...user} />
    </div>
    <CommentsList comments={comments} />
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
