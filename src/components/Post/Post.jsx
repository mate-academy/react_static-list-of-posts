import React from 'react';
import './Post.scss';
import { PostShape } from '../Shape';
import { User } from '../User/User';
import { CommentList } from '../CommentsList/CommentList';

export const Post = ({ title, body, user, comments }) => (
  <article className="post">
    <User {...user} />
    <h3 className="post__title">{title}</h3>
    <p className="post__text">{body}</p>
    <CommentList comments={comments} />
  </article>
);

Post.propTypes = PostShape;
