import React from 'react';
import { Comment } from '../Comment/Comment';
import './CommentList.scss';
import { CommentListTypes } from '../../propTypes/types';

export function CommentList({ comments }) {
  return (
    <div className="comments-list">
      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}

CommentList.propTypes = CommentListTypes;
