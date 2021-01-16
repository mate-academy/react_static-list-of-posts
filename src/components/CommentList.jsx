import React from 'react';
import { Comment } from './Comment';
import { CommentListType } from './Types';

export const CommentList = ({ comments }) => (
  <div>
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>

          <Comment comment={comment} />

        </li>
      ))}
    </ul>
  </div>
);

CommentList.propTypes = CommentListType.isRequired;
