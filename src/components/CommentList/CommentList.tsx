import React from 'react';
import { CommentInfo } from '../CommentInfo';

import { Comment } from '../../types/Comment';
import './CommentList.scss';

type Props = {
  comments: Comment[];
  postId: number;
};

export const CommentList: React.FC<Props> = ({ comments, postId }) => {
  const userComents = comments.filter(comment => comment.postId === postId);

  return (
    <div className="CommentList">
      {
        userComents.length > 0
          ? userComents.map(comment => (
            <CommentInfo {...comment} key={comment.id} />
          ))
          : 'No comments available for this post.'
      }
    </div>
  );
};
