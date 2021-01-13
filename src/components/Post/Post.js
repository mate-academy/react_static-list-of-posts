import React from 'react';
import './Post.scss';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { TypePost } from '../../types';

export const Post = ({ id, userId, title, body, user, comments }) => (
  <div className="Post">
    <User {...user} />
    <h2 className="Post__tile">{title}</h2>
    <p className="Post__body">{body}</p>
    <hr />

    <CommentList comments={comments} />
  </div>
);

Post.propTypes = TypePost;
