import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User/User';
import { CommentList } from '../CommentList';

export const Post = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h2>{title}</h2>
    <p>{body}</p>
    <User {...user} />
    <h3>Comments:</h3>
    <CommentList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
