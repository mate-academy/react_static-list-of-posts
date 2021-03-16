import React from 'react';
import { User } from './User';
import { CommentList } from './CommentList';
import { PostType } from '../types';

export function Post({ title, body, comments, user }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <User user={user} />
      <CommentList comments={comments} />
    </>
  );
}

Post.propTypes = PostType.isRequired;
