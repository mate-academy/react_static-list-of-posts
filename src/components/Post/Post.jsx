import React from 'react';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { PostType } from '../../types';

export const Post = ({ user, comments, title, text }) => (
  <>
    <div className="post-item__wrapper">
      <h2 className="post-item__title">
        {title}
      </h2>
      <p className="post-item__text">
        {text}
      </p>
      <User {...user} />
    </div>
    <CommentList comments={comments} />
  </>
);

Post.propTypes = PostType;
