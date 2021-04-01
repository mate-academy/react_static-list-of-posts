import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({
  title,
  body,
  author,
  postComments,
}) => (
  <>
    <h2>{title}</h2>
    <p>{body}</p>
    <User {...author} />
    <CommentList comments={postComments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  postComments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
