import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { AuthorType, CommentsType } from '../../types';

export function Post({ title, body, author, comments }) {
  return (
    <div className="post">
      <h3 className="post__title">{title}</h3>
      <p className="post__body">{body}</p>
      <User {...author} />
      <CommentList comments={comments} />
    </div>
  );
}

Post.propTypes = {
  comments: CommentsType.isRequired,
  body: PropTypes.string.isRequired,
  author: AuthorType.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};
