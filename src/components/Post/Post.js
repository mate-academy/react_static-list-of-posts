import React from 'react';
import { PostPropTypes } from '../propTypes/PostPropTypes';
import { User } from '../User/User';
import { CommentList } from '../CommentsList/CommentList';
import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <article className="post">
    <User {...user} />
    <h3 className="post__title">{title}</h3>
    <p className="post__text">{body}</p>
    <CommentList comments={comments} />
  </article>
);

Post.propTypes = PostPropTypes;
