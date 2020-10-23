import React from 'react';
import { User } from './User';
import { CommentList } from './CommentList';
import { PostShape } from './Shapes/PostShape';

export const Post = ({ title, body, user, comments }) => (
  <div className="App__post">
    <div className="App__title">
      {title}
    </div>

    <div className="App__body">
      {body}
    </div>

    <User {...user} />

    <CommentList commentList={comments} />
  </div>
);

Post.propTypes = PostShape;
