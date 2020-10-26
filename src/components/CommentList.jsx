import React from 'react';
import { CommentListPropTypes } from '../propTypes/commentList';
import { Comment } from './Comment';

export function CommentList({ comments }) {
  return (
    <div className="comments-list">
      <h3 className="comments-list__title">Comments:</h3>
      <ul>
        {comments.map(comment => (
          <Comment body={comment.body} name={comment.name} key={comment.id} />
        ))}
      </ul>
    </div>
  );
}

CommentList.propTypes = CommentListPropTypes;
