import React from 'react';
import './Post.scss';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { PostShape } from '../propTypes/PostShape';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <h2 className="post__title">
      {title.toUpperCase()}
    </h2>

    <p className="post__text">
      {body}
    </p>
    <span className="post__author">
      Author:
    </span>

    <User {...user} />

    <span className="post__comments">
      Comments:
    </span>

    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostShape.isRequired;
