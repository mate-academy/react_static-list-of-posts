import React from 'react';
import { commentsListType } from '../types';
import Comment from '../Comment/Comment';

const CommentsList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <Comment
        key={comment.id}
        name={comment.name}
        body={comment.body}
        email={comment.email}
      />
    ))}
  </ul>
);

CommentsList.propTypes = commentsListType.isRequired;

export default CommentsList;
