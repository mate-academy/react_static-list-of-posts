import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';
import { CommentList } from '../CommentList';
import './Post.scss';

export const Post = ({ title, user, body, comments }) => (
  <div>
    <h2 className="post-title">{title}</h2>
    <User {...user}/>
    <p>{body}</p>
    <CommentList {...comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
