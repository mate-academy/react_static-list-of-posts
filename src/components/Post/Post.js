import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList';
import './Post.css';

const Post = ({ title, body, user, comments }) => (
  <div className="posts__item">
    <h3 className="posts__title">{title}</h3>
    <p className="posts__text">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

export default Post;

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};
