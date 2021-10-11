import React from 'react';

import CommentInfo from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <div className="comment-List">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comments={comment} />
      ))}
    </div>
  );
};
