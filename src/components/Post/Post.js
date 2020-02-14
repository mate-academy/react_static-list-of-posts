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
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.oneOfType([PropTypes.object]),
    comments: PropTypes.oneOfType([PropTypes.object]),
  }).isRequired,
};
