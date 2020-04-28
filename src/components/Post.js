import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ title, body, comments, author }) => (
  <li className="list__userInfo">
    <h3 className="title">{title}</h3>
    <p className="body">{body}</p>
    <User {...author} comments={comments} />
    <CommentList comments={comments} />
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  author: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;
