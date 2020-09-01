import React from 'react';
import './Post.css';
import { PostShape } from '../shapes';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

const Post = ({ title, body, comments, user }) => (
  <div className="post">
    <div className="post__body">
      <h2 className="post__title">
        {title}
      </h2>
      <p className="post__text">
        {body}
      </p>
      <User {...user} />
    </div>
    <div className="post__comments">
      <CommentList comments={comments} />
    </div>
  </div>
);

export { Post };

Post.propTypes = PostShape;
