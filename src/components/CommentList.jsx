import React from 'react';
import { CommentListPropTypes } from '../propTypes/commentList';
import { Comment } from './Comment';

export function CommentList({ comments }) {
  // console.log(comments)
  return (
    <div className="comments-list">
      <h3 className="comments-list__title">Comments:</h3>
      {comments.map(comment => (
        <Comment body={comment.body} name={comment.name} key={comment.id} />
      ))}
    </div>
  );
}

CommentList.propTypes = CommentListPropTypes;
