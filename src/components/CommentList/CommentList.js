import React from 'react';
import { CommentListShape } from './CommentListShape';
import { Comment } from '../Comment';
import './CommentList.css';

export const CommentList = ({ comments }) => (
  <div className="App__comments">
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = CommentListShape;
