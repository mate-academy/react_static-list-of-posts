import React from 'react';
import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  commentList: Comment[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { commentList } = props;

  return (
    <div className="CommentList">
      {commentList.map(comment => (
        <CommentInfo key={comment.id} commentInfo={comment} />
      ))}
    </div>
  );
};
