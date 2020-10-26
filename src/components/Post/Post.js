import React from 'react';

import { User } from '../User';
import { PostShape } from '../Shapes/PostShape';
import { CommentList } from '../CommentList';

import './Post.scss';

export const Post = ({ title, body, user, comments }) => (

  <li className="Post">
    <h1 className="Post__title">
      {title}
    </h1>
    <h2 className="Post__body">
      {body}
    </h2>
    <User {...user} />
    <CommentList comments={comments} />
  </li>
);

Post.propTypes = PostShape;
