/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

const Post = ({ post }) => (
  <>
    <h2 className="item__title">{post.title}</h2>
    <p className="item__body">{post.body}</p>
    <User {...post.user} />
    <CommentList comments={post.comments} />
  </>
);

Post.propTypes = {
  post: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.object.isRequired,
      PropTypes.number.isRequired,
    ]),
  ).isRequired,
};

export default Post;
