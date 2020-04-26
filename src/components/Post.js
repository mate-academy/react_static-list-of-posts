import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './ComentList';

const Post = ({ post: { title, body, user, comments } }) => (
  <div>
    <h3>{title}</h3>
    <p>{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

export default Post;

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};
