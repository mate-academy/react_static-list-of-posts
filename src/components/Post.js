import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Post = ({ title, body, comments, author }) => (
  <>
    <h3 className="title">{title}</h3>
    <p className="body">{body}</p>
    <User {...author} comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  author: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;
