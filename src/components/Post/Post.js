import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';
import './Post.scss';
import { PostShape } from '../../shapes/PostShape';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <h2>{title}</h2>
    <p>{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostShape;
