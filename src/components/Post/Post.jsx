import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { UserShape, CommentShape } from '../../api/Types';
import './post.scss';

export const Post = ({ user, comment, body, title }) => (
  <div className="post">
    <h2 className="post__title">{title}</h2>
    <p className="post__body">{body}</p>
    <User {...user} />
    <CommentList comment={comment} />
  </div>
);

Post.propTypes = {
  user: PropTypes.objectOf(UserShape).isRequired,
  comment: PropTypes.arrayOf(CommentShape).isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
