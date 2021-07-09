import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2>{title}</h2>
    <p>{body}</p>
    <User {...user}/>
    <CommentList allComents={comments}/>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
    }).isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  })),
};

Post.defaultProps = {
  comments: ['no comment'],
};
