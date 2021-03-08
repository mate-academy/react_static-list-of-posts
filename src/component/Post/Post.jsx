import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2>{title}</h2>
    <p>{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
    }).isRequired,
  ).isRequired,
};
