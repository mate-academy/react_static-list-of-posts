import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ title, body, user, comments }) => (

  <div className="post">
    <h3 className="post__title">{title}</h3>
    <p className="post__text">{body}</p>
    <User name={user.name} email={user.email} address={user.address} />
    <CommentList comments={comments} />

  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf().isRequired,
  comments: PropTypes.arrayOf().isRequired,
};

export default Post;
