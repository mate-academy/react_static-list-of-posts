import React from 'react';
import PropTypes from 'prop-types';

import { CommentList } from './CommentList';
import { User } from './User';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2 className="post__title">
      {title}
    </h2>
    <p className="post__content">
      {body}
    </p>
    <User {...user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
