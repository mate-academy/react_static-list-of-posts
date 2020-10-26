import React from 'react';
import { User } from '../User';
import { PostShape } from '../shapes/PostShape';
import { CommentList } from '../CommentList';
import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <>
    <p className="post-list__info">
      {title}
    </p>
    <p className="post-list__text">
      {body}
    </p>
    <User {...user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = PostShape;
