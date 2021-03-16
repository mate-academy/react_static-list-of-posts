import React from 'react';
import { CommentType } from '../types';

export function Comment({ comment }) {
  return (
    <>
      <h3>{comment.name}</h3>
      <p>{comment.body}</p>
      <a href={`mailto:${comment.email}`}>{comment.email}</a>
    </>
  );
}

Comment.propTypes = CommentType.isRequired;
