import React from 'react';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList:React.FC<Props> = ({ comments }) => {
  return (
    <div className="comments">
      <div className="comments__title">Comments:</div>
      {comments.map(comment => (
        <CommentInfo name={comment.name} email={comment.email} body={comment.body} />
      ))}
    </div>
  );
};
