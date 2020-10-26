import React from 'react';
import { User } from '../user/User';
import { CommentList } from '../commentlist/CommentList';
import { PostShape } from '../shapes/PostShape';

export function Post({ title, body, user, comments }) {
  return (
    <article className="post__container">
      <div className="post">
        <h2 className="post__title">{title}</h2>
        <p className="post__text">{body}</p>
        <User user={user} />
      </div>
      <CommentList comments={comments} />
    </article>
  );
}

Post.propTypes = PostShape;
