import React from 'react';

import './Post.scss';
import { User } from './User';
import { CommentList } from './CommentList';
import { PostShape } from './Shape';

export const Post = ({ title, body, post, user, comments }) => (
  <div className="Post">
    <div className="Post__content">
      <div className="Post__user">
        <User {...user} />
      </div>
      <div className="Post__body">
        <h2 className="Post__title">
          {title}
        </h2>
        <p>
          {post}
        </p>
        <p>
          {body}
        </p>
      </div>
    </div>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostShape;
