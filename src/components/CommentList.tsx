import React from 'react';

import { CommentInfo } from './CommentInfo';

type Props = {
  comments: PostComment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <h3 className="header">Comments:</h3>
    <div className="ui list">
      {comments.map(comment => (
        <CommentInfo key={comment.id} {...comment} />
      ))}
    </div>
  </>
);
