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
      {comments ? comments.map(comment => <div key={comment.id}><CommentInfo comment={comment} /></div>) : ''}
    </div>
  );
};

export default CommentList;
