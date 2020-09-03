import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

import { CommentList } from '../CommentList';
import { User } from '../User';

export const Post = ({ title, body, user, comments }) => (
  <div className="post__container">
    <h2 className="post__title">{title}</h2>
    <p className="post__body">{body}</p>
    <User {...user} />
    <h3 className="post__comments">Comments:</h3>
    <CommentList commentsOnPost={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
