import React from 'react';
import { CommentInfo } from '../CommentInfo';

import { Comments } from '../../types/Comments';

type Props = {
  comments: Comments[];
  id: number;
};

export const CommentList: React.FC<Props> = ({ comments, id }) => {
  const userComents = comments.filter(comment => comment.postId === id);

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
