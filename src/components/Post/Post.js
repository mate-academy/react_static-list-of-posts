import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import './Post.css';

export const Post = ({ post: { title, body, user, comments } }) => (
  <>
    <h2 className="post__title">{title}</h2>
    <p className="post__text">{body}</p>
    <User user={user} />
    <h2 className="post__comments">Comments</h2>
    <CommentList comments={comments} />
  </>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
      }),
    }),
    comments: PropTypes.shape({
      comment: PropTypes.shape({
        name: PropTypes.string,
        body: PropTypes.string,
        email: PropTypes.string,
      }),
    }),
  }).isRequired,
};
