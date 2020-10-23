import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

import { CommentList } from '../CommentList';
import { User } from '../User';

export const Post = ({ id, title, body, user, comments }) => (
  <div className="postlist__post post" key={id}>
    <h3 className="post__title">{title}</h3>
    <p className="post__body">{body}</p>
    <CommentList comments = {comments} />
    <User {...user} />
    </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,

  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }),

  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
};
