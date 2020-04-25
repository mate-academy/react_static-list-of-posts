import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

import { CommentsList } from '../CommentsList/CommentsList';
import { User } from '../User/User';

export const Post = ({ title, body, authorOfPost, commentsToPost }) => (
  <>
    <p className="posts-list__post__title">{title}</p>
    <User {...authorOfPost} />
    <p className="posts-list__post__body">{body}</p>
    <CommentsList comments={commentsToPost} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  authorOfPost: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired,
  commentsToPost: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};
