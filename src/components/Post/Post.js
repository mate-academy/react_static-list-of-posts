import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

function Post({ post, newUsers, newComments }) {
  return (
    <div className="box">
      <User newUsers={newUsers} />
      <strong>{post.body}</strong>
      <p>{post.title}</p>
      <CommentList newComments={newComments} />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  newUsers: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  newComments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Post;
