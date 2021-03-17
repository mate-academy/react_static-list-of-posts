import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

import User from '../User';
import CommentList from '../CommentList';

export const Post = ({
  title,
  text,
  user,
  comments,
}) => (
  <div className="post">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIltE7CNXgJ95jKIkczNnzcVEbiox9t0c-sg&usqp=CAU"// eslint-disable-line
      alt="user"
      className="post__profile-photo"
    />
    <div className="post__content">
      <User
        userName={user.name}
        email={user.email}
        address={user.address}
      />
      <h5>{title}</h5>
      <p>{text}</p>
      <CommentList comments={comments} />
    </div>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
