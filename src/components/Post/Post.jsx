import React from 'react';
import PropTypes from 'prop-types';
import { User, UserType } from '../User';
import { CommentList, commentListType } from '../CommentList';
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
    <CommentList list={commentsList} />
  </div>
);

export const PostType = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(UserType).isRequired,
  commentsList: PropTypes.arrayOf(PropTypes.shape(commentListType)).isRequired,
};

Post.propTypes = PostType;
