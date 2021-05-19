import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import { User } from '../User';
import { CommentList } from '../CommentList';

export function Post({ title, body, user, comment }) {
  return (
    <>
      <h2 className="post-title">{title}</h2>
      <hr />
      <p className="post-text">{body}</p>
      <User {...user} />
      <CommentList comments={comment} />
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
