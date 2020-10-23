import React from 'react';
import './Post.scss';
import { User } from '../User/User';
import { PostShape } from '../shapes/PostShape';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ user, title, body, comments }) => (
  <div className="post">
    <div>
      <h2 className="post__title">
        {title.toUpperCase()}
      </h2>
      <div className="post__info">
        {body}
      </div>
      <div className="post__info">
        <User {...user} />
      </div>
    </div>

    <div>
      <CommentList comments={comments} />
    </div>
  </div>
);

Post.propTypes = PostShape;
