import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

import User from '../User/User';
import CommentList from '../CommentList/CommentList';

const Post = ({ title, body, author, commentsArr }) => (
  <li className="post">
    <h3 className="post-title">{title}</h3>
    <p className="post-text">{body}</p>

    <User {...author} />

    <CommentList comments={commentsArr} />

  </li>
);

Post.defaultProps = {
  commentsArr: [],
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object,
  }).isRequired,
  commentsArr: PropTypes.arrayOf(PropTypes.object),
};

export default Post;
