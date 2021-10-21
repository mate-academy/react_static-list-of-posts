import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = props => {
  const { comments } = props;

  return (
    <>
      <span className="comments-title">Comments:</span>
      {comments.map((comment: Comment) => (
        <div className="comments-block" key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))}
      <br />
    </>
  );
};
