import React from 'react';
import { postShape } from '../shapes/postShape';
import { User } from './User';
import { CommentList } from './CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="post--message">
    <div>
      <h3 className="post--title">{title}</h3>
      <User {...user} />
      <p>{body}</p>
    </div>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = postShape;
