import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import './Post.css';

const Post = ({ user, title, body, comments }) => (
  <div className="post">
    <User person={user} />
    <h2 className="post__heading">{title}</h2>
    <p className="post__text">{body}</p>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  user: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Post;
