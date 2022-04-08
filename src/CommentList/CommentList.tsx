import React from 'react';
import CommentInfo from '../CommentInfo/CommentInfo';
import { Comment } from '../types';

type Props = {
  comments: Comment[];

};

const CommentList:React.FC<Props> = ({ comments }) => {
  return (
    <div>
      COMMENTS
      {comments && comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
