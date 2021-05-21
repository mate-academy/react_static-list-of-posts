import React from 'react';

import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, comments, user }) => (
  <div className="post">
    <User user={user} />
    <h2>{title}</h2>
    <p>{body}</p>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};
