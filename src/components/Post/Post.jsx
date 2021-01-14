import React from 'react';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { PostsType } from '../../types';

export function Post({ title, body, author, comments }) {
  return (
    <div className="post">
      <h3 className="post__title">{title}</h3>
      <p className="post__body">{body}</p>
      <User {...author} />
      <CommentList {...comments} />
    </div>
  );
}

Post.propTypes = PostsType.isRequired;
