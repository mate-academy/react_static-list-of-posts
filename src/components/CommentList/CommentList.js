import React from 'react';
import './CommentList.scss';
import { Comment } from '../Comment';
import { TypeCommentList } from '../../types';

export const CommentList = ({ comments }) => (
  <div className="Comments">
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </div>
);

CommentList.propTypes = TypeCommentList;
