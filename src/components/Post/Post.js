import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList';
import { User } from '../User';

export const Post = ({ title, body, user, commentsList }) => (
  <>
    <h2>{title}</h2>
    <p>{body}</p>
    <User {...user} />
    <CommentList postComments={commentsList} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  commentsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
