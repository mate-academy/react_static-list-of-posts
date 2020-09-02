import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="post__block">
    <div className="post">
      <div className="post__heading">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="post__author">
        <User {...user} />
      </div>
    </div>

    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
