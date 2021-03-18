import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

import User from '../User/User';
import CommentList from '../CommentList/CommentList';

export const Post = ({ title, body, comments, user }) => (
  <div className="post__body">
    <User
      name={user.name}
      email={user.email}
      address={user.address}
    />
    <h2 className="post__title">
      {title}
    </h2>
    <p className="post__text">
      {body}
    </p>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.objectOf(PropTypes.shape({
      city: PropTypes.string.isRequired,
    })),
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.objectOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
      })),
    }),
  ).isRequired,
};
