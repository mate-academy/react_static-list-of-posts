import React from 'react';
import PropTypes from 'prop-types';

import User from '../User';
import CommentList from '../CommentList';

import './Post.scss';

const Post = ({ title, body, user, comment }) => (
  <div className="post">
    <div className="post__contant">
      <h1>{title}</h1>
      <p>{body}</p>
      <User {...user} />
    </div>
    <h2>Comments: </h2>
    <CommentList comment={comment} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Post;
