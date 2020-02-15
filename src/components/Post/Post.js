import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ postInfo: { title, body, user, comments } }) => (
  <div className="post">
    <span role="img" aria-label="pushpin">
    📌📌📌
    </span>
    <h2 className="post__title">{title}</h2>
    <p className="post__body">{body}</p>
    <User person={user} />
    <CommentList allComments={comments} />
  </div>
);

Post.propTypes = {
  postInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
    comments: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};
