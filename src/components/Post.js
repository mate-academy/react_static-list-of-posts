import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ postItem: { title, body, user, comments } }) => (
  <div className="item">
    <h2 className="title">{title}</h2>
    <p className="text">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  postItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Post;
