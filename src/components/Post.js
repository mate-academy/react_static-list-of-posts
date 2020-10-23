import React from 'react';
import { User } from './User/User';
import { CommentList } from './CommentList';
import { PostShape } from './Shapes/PostShape';

export const Post = ({ title, body, user, comments }) => (
  <li className="App__post">
    <div className="App__title">
      {title}
    </div>

    <div className="App__body">
      {body}
    </div>

    <User {...user} />

    <CommentList commentList={comments} />
  </li>
);

Post.propTypes = PostShape;
