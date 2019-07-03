import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList/CommentList';

const Post = ({ title, body, comments = null }) => (
  <div className="post-list__post">
    <h2>{title}</h2>
    <div>{body}</div>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
};

Post.defaultProps = {
  comments: null,
};

export default Post;
