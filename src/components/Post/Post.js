import React from 'react';
import PropTypes from 'prop-types';

import User from '../User/User';
import CommentList from '../CommentList/CommentList';

const Post = ({ post, user, comment }) => (
  <article>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <User user={user} />
    <CommentList commentList={comment} />
  </article>
);

Post.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Post;
