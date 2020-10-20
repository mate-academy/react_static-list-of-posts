import React from 'react';
import { PostShape } from '../shapes/PostShape';
import { User } from '../User';
import { CommentList } from '../CommentList';
import './Post.scss';

export const Post = ({ author, commentsOfPost, title, body }) => (
  <div className="PostList__Post Post">
    <h2 className="Post__title">
      {title}
    </h2>

    <User {...author} />

    <div className="Post__body">
      {body}
    </div>

    <CommentList comments={commentsOfPost} />
  </div>
);

Post.propTypes = PostShape;
