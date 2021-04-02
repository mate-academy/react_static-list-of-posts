import React from 'react';
import PropTypes from 'prop-types';
import { User, userType } from '../User';
import { CommentList, commentsType } from '../CommentList';
import './Post.scss';

export const Post = ({
  title,
  body,
  user,
  commentsList,
}) => (
  <div className="post">
    <h2 className="post__title">{title}</h2>
    <p className="post__body">{body}</p>
    <User {...user} />
    <CommentList comments={commentsList} />
  </div>
);

export const PostType = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(userType).isRequired,
  commentsList: PropTypes.arrayOf(commentsType).isRequired,
};

Post.propTypes = PostType;
