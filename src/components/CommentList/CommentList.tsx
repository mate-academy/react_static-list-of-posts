import React from 'react';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <>
      {comments.map(comment => (
        <div className="comment" key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))}
    </>
  );
};
