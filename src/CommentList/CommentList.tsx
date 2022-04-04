import React from 'react';
import CommentInfo from '../CommentInfo/CommentInfo';
import { Comment } from '../types';

type Props = {
  comments: Comment[] | null;
};

const CommentList:React.FC<Props> = ({ comments }) => {
  return (
    <div>
      COMMENTS
      {comments ? comments.map(e => <CommentInfo comment={e} />) : ''}
    </div>
  );
};

export default CommentList;
