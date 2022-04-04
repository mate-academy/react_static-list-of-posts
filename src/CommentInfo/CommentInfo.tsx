import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../types';

type Props = {
  comment: Comment,
};

const CommentInfo:React.FC<Props> = ({ comment }) => {
  return (
    <div className="commentInfo">
      <div>
        {comment.email}
      </div>
      <div>
        {comment.name}
      </div>
      {comment.body}
    </div>
  );
};

export default CommentInfo;
