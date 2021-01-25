import React from 'react';
import './Post.scss';

import { PostType } from '../../types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ id, title, body, user, comments }) => (
  <div className="post">
    <p className="number">{id}</p>
    <h3 className="title">{title}</h3>
    <p className="text">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostType;
