import React from 'react';
import Comment from './Comment';
import { CommentType } from '../types';

const CommentList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <div key={comment.id} className="comment">
        <Comment {...comment} />
      </div>
    ))}
  </>
);

CommentList.propTypes = CommentType.isRequired;

export default CommentList;
