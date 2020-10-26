import React from 'react';
import { PostPropTypes } from '../propTypes/post';
import { CommentList } from './CommentList';
import { User } from './User';

export function Post({ title, body, user, comments }) {
  return (
    <article className="post">
      <div className="post__container">
        <h2 className="post__title">{title}</h2>
        <p className="post__text">{body}</p>
        <User user={user} />
      </div>
      <div>
        <CommentList comments={comments} />
      </div>
    </article>
  );
}

Post.propTypes = PostPropTypes;
