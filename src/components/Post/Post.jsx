import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <h2>{title}</h2>
    <p className="post-title">{body}</p>
    <div className="post-user">
      <User {...user} />
    </div>
    <div className="post-comment">
      <CommentList comments={comments} />
    </div>
    <br />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Post;
