import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../commentList/commentList';
import { User } from '../user/user';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2 className="title">{title}</h2>
    <p className="post__body">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  comments: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
