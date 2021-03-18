import React from 'react';
import './Post.scss';
import { PostType } from '../../Types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="Post">
    <h2 className="Post__title">{title}</h2>
    <p className="Post__body">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostType;
