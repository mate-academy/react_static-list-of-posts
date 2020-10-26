import React from 'react';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { PostShape } from '../shapes/PostShape';
import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <div className="post__container">
    <div className="post__title">
      {title}
    </div>
    <div className="post__text">
      {body}
    </div>
    <div className="post__user">
      <User {...user} />
    </div>
    <div className="post__comment comment">
      <CommentList comments={comments} />
    </div>
  </div>
);

Post.propTypes = PostShape;
