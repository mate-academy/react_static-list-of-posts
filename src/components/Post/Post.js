import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';

import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ body, title, user, comments }) => (
  <article className="post">
    <div className="post__text">
      <User {...user} />
      <h2 className="post__title">{title}</h2>
      <p>{body}</p>
    </div>
    <div>
      <CommentList comments={comments} />
    </div>
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,

  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
};
