import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ postItem: { title, body, user, comments } }) => (
  <li className="post-list__item">
    <h3 className="post-list__title">{title}</h3>
    <p className="post-list__text">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </li>
);

Post.propTypes = {
  postItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
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
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Post;
