import React from 'react';
import './post.scss';
import PropTypes from 'prop-types';

import { User } from '../User';
import { CommentList } from '../CommentList';

export function Post({ user, comments, title, body }) {
  return (
    <>
      <h2 className="post__title">{title}</h2>
      <p className="post__content">{body}</p>
      <User
        name={user.name}
        email={user.email}
        address={user.address}
      />
      <CommentList comments={comments} />
    </>
  );
}

Post.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  comments: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
