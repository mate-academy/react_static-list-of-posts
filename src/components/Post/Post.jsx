import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, user, commentList }) => (
  <div className="Post">
    <h1>{title}</h1>

    <p>
      <span>{body}</span>
    </p>

    <h2>Author:</h2>
    <User {...user} />
    <h2>Comments:</h2>
    <CommentList commentList={commentList} />
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
    }).isRequired,
  }).isRequired,
  commentList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
