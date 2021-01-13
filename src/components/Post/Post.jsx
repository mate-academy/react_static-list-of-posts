import React from 'react';
import './Post.scss';
import { User } from '../User';
import { PostShape } from '../Shapes/PostShape';
import { CommentList } from '../CommentList';

export const Post = ({ user, title, body, comments }) => (
  <li className="post-list__post post">
    <div className="post__title">
      {title}
    </div>

    <div className="post__body">
      {body}
    </div>

    <div className="post__user">
      <User {...user} />
    </div>

    <div className="post__comment-list comment-list">
      <CommentList comments={comments} />
    </div>
  </li>
);

Post.propTypes = PostShape;
