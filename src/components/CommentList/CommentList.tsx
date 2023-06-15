import React from 'react';
import { CommentInfo } from '../CommentInfo';

import { Comments } from '../../types/Comments';

type Props = {
  comments: Comments[];
  userId: number;
};

export const CommentList: React.FC<Props> = ({ comments, userId }) => {
  const userComents = comments.filter(comment => comment.postId === userId);

  return (
    <div className="CommentList">
      {
        userComents.length > 0
          ? userComents.map(comment => (
            <CommentInfo {...comment} key={comment.id} />
          ))
          : 'No Comments Message'
      }
    </div>
  );
};
