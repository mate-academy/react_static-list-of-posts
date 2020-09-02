import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div>
    <h3 className="name posts__name">{title}</h3>
    <p>{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
