import React from 'react';
import './CommentsList.scss';
import { Comment, CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[] | null,
};

export const CommentsList: React.FC<Props> = ({ comments }) => {
  return (
    <div>
      <h3 className="comments-title">Comments:</h3>
      {comments?.map(item => <CommentInfo comment={item} />)}
    </div>
  );
};
